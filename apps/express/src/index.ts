import express from "express";
import path from "path";
import dotenv from "@dotenvx/dotenvx";
import fs from "fs";

dotenv.config({
  path: path.join(__dirname, "../../../.env")
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../../react/dist")));

// Routes
app.get("/api", (req, res) => {
  res.send("Hello, World!" + process.env.NODE_ENV);
});

app.get("/api/health", (req, res) => {
  res.send("OK");
});

// Fallback for React Router (unmatched routes)
app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "../../react/dist", "index.html");

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If file not found, send a fallback page or 404 response
      res.status(404).send("Page not found");
    } else {
      // Serve the index.html if the file exists
      res.sendFile(filePath);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
