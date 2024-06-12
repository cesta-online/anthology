const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the root directory at /anthology
app.use("/anthology", express.static("."));

// Redirect from root to /anthology
app.get("/", (req, res) => {
  res.redirect("/anthology");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/anthology`);
});
