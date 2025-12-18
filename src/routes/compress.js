const express = require("express");
const multer = require("multer");
const sharp = require("sharp");

const router = express.Router();

// Store upload in memory (simple + works great in Docker)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

router.post("/compress", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const quality = Math.min(
      Math.max(parseInt(req.body.quality || "75", 10), 1),
      100
    );
    const format = (req.body.format || "jpeg").toLowerCase();

    const input = sharp(req.file.buffer).rotate(); // rotate based on EXIF when present

    let outputBuffer;
    let contentType;
    let ext;

    if (format === "webp") {
      outputBuffer = await input.webp({ quality }).toBuffer();
      contentType = "image/webp";
      ext = "webp";
    } else if (format === "png") {
      // PNG compression is lossless; 'quality' doesn't apply the same way
      outputBuffer = await input.png({ compressionLevel: 9 }).toBuffer();
      contentType = "image/png";
      ext = "png";
    } else {
      // default jpeg
      outputBuffer = await input.jpeg({ quality, mozjpeg: true }).toBuffer();
      contentType = "image/jpeg";
      ext = "jpg";
    }

    res.setHeader("Content-Type", contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="compressed.${ext}"`
    );
    return res.send(outputBuffer);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Compression failed" });
  }
});

module.exports = router;
