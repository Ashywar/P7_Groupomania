# Groupomania - Réseau social d'entreprise

## PROJET 7 - OPENCLASSROOMS - DEVELOPPEUR WEB

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. <br />
Le but de cet outil est de faciliter les interactions entre collègues. <br />

## Le projet contient les technologies suivantes:

- <a  href="https://nodejs.org/"  title="Node.js"><img  src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg"  alt="Node.js"  width="25px"  height="21px"> Node.js</a>
- <a  href="https://expressjs.com/"  title="Express"><img  src="https://github.com/get-icon/geticon/raw/master/icons/express.svg"  alt="Express"  width="25px"  height="21px"> Express.js</a>
- <a  href="https://www.mongodb.com/"  title="Express"><img  src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg"  alt="Mongo Db"  width="25px"  height="21px"> Mongo Db</a>

- <a  href="https://angular.io/"  title="Angular"><img  src="https://fossies.org/linux/angular/aio/src/assets/images/logos/angular/angular.png"  alt="Angular"  width="25px"  height="21px"> Angular</a>

## Backend

### Installation

-   Dans le terminal de VSCODE, situez-vous dans le dossier `/backend`.
    <br />
-   Démarrer `npm install` pour installer toutes les dependences du backend.
    <br />
-   Créer à la racine du backend un fichier .env contenant les variables suivantes :

```
  PORT=(Le port ou votre serveur sera hébérgé)
  CLIENT_URL=http://localhost:4200
  DATABASE_CONNECTION=(informations de votre base de données)
  TOKEN_SECRET=( Votre clé secret de décodage du Token)
```

## Frontend

- Dans le dossier `/frontend` démarrez `npm install` pour installer toutes les dépendances du frontend.

- Démarrer `ng serve` pour avoir accès au serveur de développement. L'application va se recharger automatiquement si vous modifiez un fichier source.

### Pour accéder à l'interface du site:

- Ouvrir le navigateur a l'adresse http://localhost:4200/

## Fonctionnalités utilisateurs:

### Page de connexion
Une page de connexion permettant à l’utilisateur de se connecter, ou bien
de créer un compte s’il n’en possède pas.Ici il faut demander le minimum
d’informations, la connexion doit se faire à partir de deux éléments : le mail
de l’employé, et un mot de passe. Rien de plus à prévoir pour le moment.

### Détails de la fonctionnalité de connexion
● Un utilisateur doit avoir la possibilité de se déconnecter. <br />
● La session de l’utilisateur persiste pendant qu’il est connecté. <br />
● Les données de connexion doivent être sécurisées. <br />

### Page d’accueil
La page d’accueil doit lister les posts créés par les différents utilisateurs.
On voudra que les posts soient listés de façon antéchronologique (du plus
récent au plus ancien).

### Création d’un post
● Un utilisateur doit pouvoir créer un post. <br />
● Un post doit pouvoir contenir du texte et une image. <br />
● Un utilisateur doit aussi pouvoir modifier et supprimer ses posts. <br />

### Système de like
Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post.

### Rôle administrateur
Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer
un utilisateur “administrateur” ; celui-ci aura les droits de modification /
suppression sur tous les posts du réseau social. Il faudra donc nous
communiquer les identifiants de cet administrateur.

# Chartes graphiques de l'application

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primaire | `#FD2D01` |
| Secondaire | `#FFD7D7` |
| Tertiaire | `#4E5166` |


Police d'écriture : Lato