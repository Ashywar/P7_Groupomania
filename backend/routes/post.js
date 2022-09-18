const express = require("express"); // import express
const router = express.Router(); // crée routeur express

//Importation de auth pour la sécurité des routes
const auth = require("../middleware/auth");

//Imporation de multer pour les images
const multer = require("../middleware/multer-config");

//Imporatation du controller des post
const postCtrl = require("../controllers/post");

router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, multer, postCtrl.createPost);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.post("/:id/like", auth, postCtrl.likePost);

module.exports = router;
