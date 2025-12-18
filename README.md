# Image Compress Service

A Node.js + Express web service that compresses images (JPEG/WEBP/PNG).  
It serves a simple web page for uploading an image and downloading the compressed result.

## Tech Stack

- Node.js
- Express
- Multer (file upload)
- Sharp (image compression)

## Features

- Web UI at `/` to upload an image and download the compressed version
- `POST /compress` for image compression
- `GET /health` for health check

## Run locally (without Docker)

```bash
npm install
npm run dev
```
