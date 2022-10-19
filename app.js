/**
 * app.js - Fichier principal de l'application
 * A vous de le compléter pour implémenter les fonctionnalités
 */

const readLine = require("./lib/asyncReadLine");

/****************/
/* Utilisateurs */
/****************/

const users = []; // Vous devrez sotcker vos objets utilisateurs dans ce tableau

/*****************/
/* Constructeurs */
/*****************/

// TODO: Créer le/les contructeurs et prototypes nécessaires au bon fonctionnement de l'app

/********************/
/*  Fonctionnalités */
/********************/

const features = {
  /* Créer un utilisateur */
  "user create": async function () {
    console.log("Saisissez les informations du nouvel utilisateur :");
    const firstname = await readLine("Prénom : ");
    console.log(firstname);
    // TODO: A compléter
  },

  /* Supprimer un utilisateur */
  "user delete": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Lister les utilisateurs */
  "user list": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Afficher les détails d'un utilisateur */
  "user details": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Ajouter une méthode de salut spécifique à un utilisateur */
  "user set-custom-hello": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Ajouter des crédits à un utilisateur */
  "user add-credits": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Vérifier le statut premium ou non d'un utilisateur */
  "user check-premium": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Changer le statut premium d'un utilisateur */
  "user set-premium": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Modifier le role par défaut */
  "set-default role": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },

  /* Modifier la méthode de "salut" par défaut */
  "set-default": async function () {
    console.log("A implémenter.");
    // TODO: A compléter
  },
};

module.exports = features;
