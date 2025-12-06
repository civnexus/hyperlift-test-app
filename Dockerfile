FROM python:3-slim

WORKDIR /app

# copy everything in the repo (html, css, js, etc.)
COPY . .

# serve static files on Hyperlift default port
CMD ["python", "-m", "http.server", "8080"]
