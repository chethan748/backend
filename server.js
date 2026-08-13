const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});