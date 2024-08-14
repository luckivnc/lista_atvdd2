//1) Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números. 

function mostrarMultiplicacao() {

    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    let resultado = num1 * num2;
    alert("O resultado da multiplicação é: " + resultado);
}
mostrarMultiplicacao();