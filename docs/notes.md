# Technical Notes

## Biggest Docker problem + solution

Problem: At first, the container started but the service was not reachable from the browser.
Cause: The server was listening on localhost (127.0.0.1) inside the container.
Solution: Bind Express to 0.0.0.0 and map the port when running Docker:

- app.listen(PORT, "0.0.0.0")
- docker run -p 3000:3000 image-compress-service

## Biggest Git/GitHub lesson

Using small, meaningful commits makes the repository easier to review and proves real progress.
I learned to commit by milestones (structure, feature, docker, docs, fixes) with clear messages
instead of vague commits like "final" or "update".
