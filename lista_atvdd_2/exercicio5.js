//5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));

    let imc = peso / (altura * altura);

    alert(`Seu IMC é: ${imc.toFixed(2)}`);
}
calcularIMC();