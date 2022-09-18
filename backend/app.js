const express = require("express");
require("dotenv").config();
const path = require("path");
const helmet = require("helmet");
const mongoose = require("mongoose");
const xss = require("xss-clean"); // Désinfecte le HTML non fiable (pour empêcher XSS) avec une configuration spécifiée par une liste blanche.
const hpp = require("hpp"); // Protège contre les attaques de pollution des paramètres HTTP
const mongoSanitize = require("express-mongo-sanitize"); //Protège des attaques par injection NoSQL(MongoDB)

const app = express();
app.use(express.json());

//Imporation des différentes routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

// Connexion à bdd MongoDB via mongoose
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successful !!"))
  .catch((e) => console.log(e, "MongoDB connection failed  !"));

app.use(
  helmet({
    ccrossOriginResourcePolicy: {
      policy: "same-site",
    },
  })
);

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
//Protection des en-tetes headers
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "same-site",
  })
);
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Folder "images" that will host the images
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
