const readline = require("readline");

// codons un psychologue \o/
const psy = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// le principe : il vous accueille, vous écoute pendant 20 secondes puis vous résume la session avant de vous annoncer le tarif

// l'accueil
console.log('Bienvenue ! Asseyez-vous confortablement et parlez-moi de vous');

// le tableau qui contiendra les réponses de l'utilisateur
const answers = [];

// l'événement line : https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_event_line
psy.on('line', (answer) => {
    answers.push(answer);
    console.log("Hmm, intéressant... continuez, je vous prie...");
// l'événement close : https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_event_close
}).on('close', () => {
    console.log("Merci de votre confiance, ça fera 85€");
    // rappel : un programme node ne se ferme pas tout seul ;-)
    process.exit(1);
});

setTimeout(() => {
    // \n : moins infaillible que os.EOL, mais ici ça fera l'affaire ;-)
    // comme l'utilisateur est sûrement en train d'écrire et que je l'interromps, je commence par sauter une ligne ;-)
    console.log("\nLa session est terminée ! Si je résume, vous m'avez confié les informations suivantes");
    console.log(answers.join("\n"));
    // cette méthode coupe l'interface, elle ne réagira donc plus à l'événement 'line'
    // et elle lance également l'événement 'close'
    psy.close();
}, 20000);