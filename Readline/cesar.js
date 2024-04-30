// la fonction rot13 permet de chiffrer un message : https://fr.wikipedia.org/wiki/ROT13
const rot13 = (phrase) => phrase.toLowerCase().split("").map((char) => !!char.match(/[a-z]/)?String.fromCharCode((char.charCodeAt(0) - "a".charCodeAt(0) + 13)%26 + "a".charCodeAt(0)):char).join("");
// pas besoin de la comprendre, elle est là pour être utilisée ;-)

// exo en autonomie

// codez un programme qui décode le message contenu dans le fichier message.txt et l'affiche dans la console ;-)
// nécessite d'aller jeter un oeil à https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_example_read_file_stream_line_by_line

// correction
const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    // une interface readline peut être connectée à beaucoup de types de flux, la console est l'exemple le plus courant
    // mais ici, on connecte un fichier en entrée de l'interface, qui va alors le lire, ligne par ligne
    input: fs.createReadStream('./message.txt'),
    // pas besoin de sortie (de toute façon, le contenu du fichier est illisible), on va utiliser console.log pour l'affichage
    output: null
});

// reste à passer chaque ligne à notre fonction rot13 et à afficher le résultat
rl.on("line", line => console.log(rot13(line)));

// et buon appetito ;-)