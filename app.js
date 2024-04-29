const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("src"));

// Custom middleware
app.use((req, res, next) => {
  const reqPath = path.join(__dirname, "src", req.path);
  if (fs.existsSync(reqPath)) {
    if (fs.lstatSync(reqPath).isDirectory()) {
      const indexFilePath = path.join(reqPath, "index.html");
      const publicIndexFilePath = path.join(reqPath, "public", "index.html");
      if (fs.existsSync(indexFilePath)) {
        next();
      } else if (fs.existsSync(publicIndexFilePath)) {
        res.sendFile(publicIndexFilePath);
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

// fetching the site_libs for quarto
app.use((req, res, next) => {
  if (req.path.includes("/site_libs/")) {
    const newPath = req.path.replace("/site_libs/", "/public/site_libs/");
    res.redirect(newPath);
  } else {
    next();
  }
});

// 404 middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "404", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
