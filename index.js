let who = ["Mi abuela", "Mi perro", "Mi novia", "El cometareas"];
let action = ["se comio", "se pateo", "lo golpearon en la ingle con un coco"];
let action2 = ["mi tarea", "mi carro", "mi casa"];
let when = ["en la mañana", "en la noche", "en la madrugada"];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generarFrase() {
  let randomWho = who[getRandomIndex(who)];
  let randomAction = action[getRandomIndex(action)];
  let randomAction2 = action2[getRandomIndex(action2)];
  let randomWhen = when[getRandomIndex(when)];
  let resultado =
    randomWho + " " + randomAction + " " + randomAction2 + " " + randomWhen;
  document.getElementById("excusa").innerText = resultado;
}

window.onload = function() {
  generarFrase();
};
