# FRESH FOOD #

## Présentation ##

`Fresh Food` est un site qui permet de faire la `gestion de stock alimentaire`.

## Installation  ##

** En ligne de commande **

Prendre le projet sur `Github` :
> git clone `depuis la branche master`

Lancer le serveur `Symfony` :
> symfony serve

Installer et lancer yarn pour le css et le js
``''
> yarn install
> yarn run dev-server
``''

Installer et lancer maildev pour l'envoie de mail
``''
> npm install -g maildev
> maildev
Ce rendre dans l'url `localhost:1080` dans une nouvelle fenêtre de votre navigateur, puis écrire `MAILER_URL=smtp://localhost:1025` dans le fichier `.env`
``''

## Scénario  ##
    
    - Création d'un compte et connexion au site
    - Création, affichage, edition, suppréssion d'un produit
    - Visite d'un profile utilisateur
    - Visite du back-office en admin
    - Envoyer un mail depuis son profil dans l'onglet Contact