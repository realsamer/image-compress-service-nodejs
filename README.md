# Image Compression Service (Node.js)

Image Compression Service is a Dockerized Node.js and Express web application that allows users to upload images and compress them using different formats (JPEG, PNG, WEBP) and quality levels.

The application provides a simple and intuitive web interface while exposing a backend API, making it easy for any developer to build, run, and test the service locally using Docker.

---

## Tech Stack

- Node.js
- Express.js
- Multer (file uploads)
- Sharp (image compression)
- Docker & Docker Compose
- HTML, CSS, JavaScript (served statically)

---

## Project Overview

This project demonstrates:

- Building a real-world backend service using Node.js and Express
- Handling file uploads securely
- Performing efficient image compression using Sharp
- Containerizing applications using Docker
- Providing clear documentation so any developer can run the project in minutes

The frontend is intentionally lightweight and served directly by the backend server to keep the architecture simple and focused.

---

## Prerequisites

Before running the project, ensure you have:

- Docker (version 20 or higher)
- Docker Compose (v2 recommended)

---

## How to Build and Run Using Docker

### Option A: Run Using Docker Compose (Recommended)

This is the **recommended and easiest** way to run the project.

```bash
docker compose up --build
```

## Bonus: Multi-stage Docker Build (Image Size Optimization)

This project uses a **multi-stage Docker build** to optimize the final Docker image size and improve runtime efficiency.

The Dockerfile is structured into multiple stages:

- A **dependencies stage** that installs only the required production dependencies.
- A **final runtime stage** that copies only the necessary application files and dependencies.

By separating the build process from the runtime environment, this approach results in:

- A smaller and cleaner Docker image
- Faster container startup time
- Reduced attack surface in the final image

### Build and Run the Multi-stage Image

Build the optimized image:

```bash
docker build -t image-compress-service-nodejs:multistage .


## Instructor Acknowledgement

This project was developed as part of the **Operating Systems Laboratory** coursework.

I would like to sincerely thank **Yosef Al Sabbah**
GitHub: https://github.com/Yosef-AlSabbah

for his guidance, constructive feedback, and academic supervision throughout this assignment.
His suggestions directly contributed to improving the project structure, Docker configuration, and documentation quality.
```
