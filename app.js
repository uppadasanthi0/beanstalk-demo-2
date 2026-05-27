const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (like index.html) from this folder
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Cron endpoint (for cron.yaml)
app.get("/cron", (req, res) => {
  console.log("Cron job called at " + new Date().toISOString());
  res.status(200).send("Cron job ran successfully.\n");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
