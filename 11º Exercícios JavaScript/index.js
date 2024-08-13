let matriz = [];
let cont = 1;

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 4; j++) {
    matriz[i][j] = cont;
    cont++;
  }
}

document.write('<table border="1">');
for (let i = 0; i < 4; i++) {
  document.write("<tr>");
  for (let j = 0; j < 4; j++) {
    document.write("<td>" + matriz[i][j] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

//QUESTÃO 2

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (matriz[i][j] === 10) {
      document.write("O 10 foi encontrado na tabela");
      break;
    }
  }
}
