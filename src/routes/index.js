const express = require("express");
const router = express.Router();
const path = require("path");

const views = path.join(__dirname, "../views");

const isLoginIn = require("../middlewares/isLoginIn");

router.get("/", isLoginIn, (req, res) => {
  res.sendFile(views + "/index.html");
});

router.get("/login", (req, res) => {
  res.sendFile(views + "/register.html");
});

router.get("/logout", (req, res) => {
    res.clearCookie(`username`, { path: "/", SameSite: "Lax", Secure: true });
    res.redirect("/login");
});

module.exports = router;
