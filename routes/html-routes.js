const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/edit.html"));
});

router.get("/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/delete.html"));
});

module.exports = router;
