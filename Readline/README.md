# Intro à readline

Présenter [index.js](./index.js), si la compréhension et le temps le permettent, détailler [psy.js](./psy.js) pour aborder l'événement `line`. Sinon, modifier simplement [index.js](./index.js) pour utiliser cette écriture :

```js
rl.question("Pseudo Discord ? ", (pseudo) => console.log("Profil : https://github.com/" + pseudo + "/"));

// devient
console.log("Pseudo Discord ? ");
rl.on('line', (pseudo) => console.log("Profil : https://github.com/" + pseudo + "/"));
```

## Exo en autonomie (15 min)

Détaillés en commentaire du fichier [cesar.js](./cesar.js)
