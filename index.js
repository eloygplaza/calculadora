import ps from "prompt-sync";

const prompt = ps();

while (true) {
  console.log("1) Salir:");
  console.log("2) Sumar:");
  console.log("3) Restar:");
  console.log("4) Multiplicar:");
  console.log("5) Dividir:");

  const operator = prompt("Que operacion deseas realizar: ");

  // we check if it is a number or is the option selected is between the ones that we created
  if (isNaN(operator || (operator > 5 && operator < 1))) {
    console.log("Escribe una opcion correcta");
    continue;
  }

  // if is 1, we close the program
  if (operator === "1") break;

  // we check with option selected the user
  switch (operator) {
    case "2":
      let n1 = prompt("Escribe el primer numero: ");
      let n2 = prompt("Escribe el segundo numero: ");
      console.log("Tu resultado es: " + (parseInt(n1) + parseInt(n2)));
      break;
    case "3":
      let n3 = prompt("Escribe el primer numero: ");
      let n4 = prompt("Escribe el segundo numero: ");
      console.log("Tu resultado es: " + (parseInt(n3) - parseInt(n4)));
      break;
    case "4":
      let n5 = prompt("Escribe el primer numero: ");
      let n6 = prompt("Escribe el segundo numero: ");
      console.log("Tu resultado es: " + parseInt(n5) * parseInt(n6));
      break;
    case "5":
      let n7 = prompt("Escribe el primer numero: ");
      let n8 = prompt("Escribe el segundo numero: ");
      console.log("Tu resultado es: " + parseInt(n7) / parseInt(n8));
    default:
      break;
  }
}
