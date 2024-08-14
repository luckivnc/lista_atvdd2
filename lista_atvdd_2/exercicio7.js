//7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.Ao final, mostrar a média de litros bebidos por pessoa na festa.
function calcularMediaConsumo() {
    let choppConsumido = parseFloat(prompt("Digite a quantidade de chopp consumida (em litros):"));
    let choppDesperdicado = parseFloat(prompt("Digite a quantidade de chopp desperdiçado (em litros):"));
    let choppSobrou = parseFloat(prompt("Digite a quantidade de chopp que sobrou (em litros):"));

    let totalChopp = choppConsumido + choppDesperdicado + choppSobrou;
    let mediaPorPessoa = totalChopp / 45;

    alert(`Média de litros bebidos por pessoa na festa: ${mediaPorPessoa.toFixed(2)} litros`);
}

calcularMediaConsumo();