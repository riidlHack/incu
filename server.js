// server.js
import express from "express";
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import cors from "cors";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());

// API to read CSV
app.get("/api/results", (req, res) => {
  const results = [];
  fs.createReadStream(path.join(__dirname, "public", "result.csv"))
    .pipe(csvParser())
    .on("data", (row) => results.push(row))
    .on("end", () => res.json(results))
    .on("error", (err) => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});