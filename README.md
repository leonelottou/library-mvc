# Library MVC

## Description

Ce projet est une **application web simple de gestion de bibliothèque** réalisée avec l'architecture **MVC** en Node.js et Express.  
Il permet de gérer une liste de livres avec les fonctionnalités suivantes :

- Ajouter un livre
- Modifier un livre
- Supprimer un livre
- Lister tous les livres

Les vues sont réalisées avec **Bootstrap 5** pour une interface simple et responsive.

---

## Structure du projet

library-mvc/
├── controllers/ # Logique des actions (CRUD)
│ └── BookController.js
├── models/ # Modèle représentant les livres
│ └── Book.js
├── routes/ # Définition des routes
│ └── routes.js
├── views/ # Templates HTML
│ ├── index.html
│ ├── add.html
│ └── edit.html
├── app.js # Point d'entrée du serveur
└── package.json # Dépendances du projet


---

## Installation

1. Cloner le dépôt :

```bash
git clone <URL_DU_DEPOT>
cd library-mvc
Installer les dépendances :

npm install
Lancer le serveur :

node app.js
Ouvrir le navigateur à l'adresse :

http://localhost:3000
Utilisation
Page d'accueil (/) : affiche la liste de tous les livres avec options de modification et suppression.

Ajouter un livre (/add) : formulaire pour ajouter un nouveau livre.

Modifier un livre (/edit/:id) : formulaire pour modifier un livre existant.

Supprimer un livre (/delete/:id) : supprime le livre et revient à la liste.

Toutes les actions mettent à jour directement les livres en mémoire (sans base de données, pour simplifier le projet).

Technologies utilisées
Node.js

Express

HTML / Bootstrap 5

Git pour le versioning
