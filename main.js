let ismlar = ["Jaloliddin", "Kamola", "Tom", "Sara", "Ismoil", "Navruz", "Jill"];

let shortNames = [];
let longNames = [];

for (let i = 0; i < ismlar.length; i++) {
  if (ismlar[i].length < 5) {
    shortNames.push(ismlar[i]);
  } else {
    longNames.push(ismlar[i]);
  }
}

console.log("Qisqa ismlar");
console.log(shortNames.join("\n"));

console.log("Uzun ismlar:");
console.log(longNames.join("\n"));