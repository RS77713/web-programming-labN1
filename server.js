const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "express")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "express", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Website is running at http://localhost:${PORT}`);
});