const router = require("express").Router();
const rateLimit = require("express-rate-limit"); // package de prévention des forces brutes

const userCtrl = require("../controllers/user");
const password = require("../middleware/password-validator");
const multer = require("../middleware/multer-config");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many request from this IP. please try again in 15 min",
  skipSuccessfulRequests: true, // count successful requests (status < 400)
});

//Création des routes
router.post("/signup", password, userCtrl.signup); //s'inscrire
router.post("/login", limiter, userCtrl.login); //se connecter

module.exports = router;
