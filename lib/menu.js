const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const menu = {
  inputNewAction(callbacks) {
    return new Promise((resolve) => {
      rl.question(
        "\x1b[34m\n> Que souhaitez-vous faire ? (Tapez help pour obtenir la liste des actions) : \x1b[0m",
        async (action) => {
          console.log("\n");
          switch (action) {
            case "exit":
              process.exit(0);
              break;
            case "help":
              this.logHelp();
              resolve(null);
              break;
            default:
              resolve(action);
          }
        }
      );
    });
  },

  logTitle(title) {
    const separator =
      "/" + new Array(String(title).length + 4).fill("*").join("") + "/";
    console.log(separator + "\n/* " + title + " */\n" + separator);
    console.log("");
  },

  logHelp() {
    this.logTitle("Liste des commandes");
    console.log(`Utilisateur
------------
user create - Créer un utilisateur
user delete - Supprimer un utilisateur
user list - Lister les utilisateurs
user details - Afficher les détails d'un utilisateur
user set-custom-hello - Ajouter une méthode de salut spécifique à un utilisateur
user add-credits - Ajouter des crédits à un utilisateur
user check-premium - Vérifier le statut premium ou non d'un utilisateur
user set-premium - Changer le statut premium d'un utilisateur

Valeurs par défaut
------------------
set-default role - Modifier le role par défaut
set-default hello - Modifier la méthode de "salut" par défaut
`);
  },

  async run(callbacks) {
    while (true) {
      const action = await this.inputNewAction(callbacks);
      if (action !== null && callbacks.hasOwnProperty(action)) {
        await callbacks[action]();
      } else if (action !== null) {
        console.log(
          "\x1b[31mCommande inconnue. (Tapez aide pour obtenir la liste des actions)\x1b[0m"
        );
      }
    }
  },
};

module.exports = menu;
