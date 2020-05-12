# FRESH FOOD #

## Présentation ##

`Fresh Food` est un site qui permet de faire de la `gestion de stock alimentaire`.

## Installation  ##

** En ligne de commande **

Prendre le projet sur `Github` :
> git clone `depuis la branche master`

Installer les composants de `Symfony` :
> composer install

Creez un fichier à la racine du projet et nommez le `.env.local` et notez cette ligne :
`DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7`
pour se connectez a votre base de données remplacez : 

    - db_user par votre nom d'utilisateur
    - db_password par votre mot de passe
    - db_name par le nom de votre base de données
    - si vous avez MySQL 5.7 laissez le 3306 qui est par défault
    - si vous avez MySQL 8 écrivez 3308

Lancer le serveur `Symfony` :
> symfony serve

Installer et lancer `yarn` pour le css et le js :
Remarque : Si vous avez un fichier nommez `node_modules` à la racine du projet, supprimez-le avant de faire `yarn install`

> yarn install

> yarn run dev-server

Installer et lancer `maildev` pour l'envoie de mail :

> npm install -g maildev

> maildev

Ce rendre dans l'url `localhost:1080` dans une nouvelle fenêtre de votre navigateur, 
puis écrire `MAILER_URL=smtp://localhost:1025` dans le fichier `.env.local`

## Scénario  ##
    
    - Création d'un compte et connexion au site
    - Création, affichage, edition, suppréssion d'un produit
    - Visite d'un profile utilisateur
    - Visite du back-office en admin
    - Envoyer un mail depuis son profil dans l'onglet Contact