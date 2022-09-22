import ps from "prompt-sync";

const prompt = ps();

while (true) {
  console.log("1) Salir:");
  console.log("2) Sumar:");
  console.log("3) Restar:");
  console.log("4) Multiplicar:");
  console.log("5) Dividir:");

  const operator = prompt("Que operacion deseas realizar: ");

  if (operator === "1") break;

  switch (operator) {
    case "2":
      const n1 = prompt("Escribe el primer numero: ");
      const n2 = prompt("Escribe el segundo numero: ");
      console.log("Tu resultado es: " + parseInt(n1) + parseInt(n2));
      break;
    default:
      break;
  }
}
