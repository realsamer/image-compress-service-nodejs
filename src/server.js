require("dotenv").config();

const express = require("express");
const path = require("path");

const compressRouter = require("./routes/compress");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/", compressRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
