// protége les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes
const jwt = require("jsonwebtoken");

// Prise en charge du fichier de configuration .env
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // extraction du token du header, split pour récupérer tout après l'espace dans le header
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); // verify pour décoder le token
    const userId = decodedToken.userId; //  exctraction ID utilisateur du token
    const isAdmin = decodedToken.isAdmin; //verify si l'utilisateur est administrateur
    req.auth = { userId, isAdmin };
    if (req.body.userId && req.body.userId !== userId) {
      // comparaison ID utilisateur à celui du token
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    //console.log('auth.catch');
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
