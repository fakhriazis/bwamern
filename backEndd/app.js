// const hero = require("superheroes");

// for (let i = 0; i < 10; i++) {
//   console.log(hero.random());
// }

const op = require("./module");

const moduleTitle = op.title;
const modulePenjumlahan = op.tambah(10, 5);
const modulePerkalian = op.kali(2, 2);

console.log(moduleTitle);
console.log(modulePenjumlahan);
console.log(modulePerkalian);
