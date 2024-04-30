// readline est un de ces nombreux modules additionnels préinstallés avec Node
// comme son nom l'indique (ou pas), ce module sert notamment à interagir avec un utilisateur via la console
// il sert plus généralement à lire des flux, mais comme c'est un peu abstrait, on va déjà commencer par un exemple très concret
const readline = require("readline");

// readline ne s'utilise pas directement, il faut utiliser la méthode createInterface pour créer... une interface :-)
// une interface, c'est un petit programme qui a une entrée et une sortie
// et qui écrit quelque chose en sortie chaque fois qu'il reçoit quelque chose en entrée
const rl = readline.createInterface({
    input: process.stdin, // ce que l'utilisateur tape dans la console
    output: process.stdout // ce que l'utilisateur lit dans la console
});

// mais alors ? l'utilisateur est une interface aussi ?
// il a une entrée : process.stdout, ce qu'il lit
// et une sortie : process.stdin, ce qu'il écrit
// et il réagit et écrit quelque chose dans la console chaque fois qu'il y lit quelque chose
// => oui, on peut considérer l'utilisateur comme une interface

// 2 modes de communication pour une interface :

// - le mode question/réponse
rl.question("Pseudo Discord ? ", (pseudo) => console.log("Profil : https://github.com/" + pseudo + "/"));
// rl.close(); // ferme l'interface
// process.exit(1); // termine le programme
// attention à ne mettre aucune de ces 2 instructions en dessous d'un appel de la méthode 'question'
// son exécution étant asynchrone, l'utilisateur ne pourrait alors pas saisir son pseudo (démo live)

// - le mode événement (cf psy.js)
