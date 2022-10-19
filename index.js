/**
 * index.js - Point d'entrée
 */

/***********/
/* Imports */
/***********/
const menu = require("./lib/menu.js");
const callbacks = require("./app.js");

/***********************/
/* Démarrage de la CLI */
/***********************/
menu.logTitle("User Manager v.1");
menu.logHelp();
menu.run(callbacks);
