//6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
function calcularValorReciclagem() {
    let kgPlastico = parseInt(prompt("Digite a quantidade (em kg) de plástico a entregar:"));
    let kgPapel = parseInt(prompt("Digite a quantidade (em kg) de papel a entregar:"));
    let kgMetal = parseInt(prompt("Digite a quantidade (em kg) de metal a entregar:"));

    let valorPlastico = (kgPlastico / 10) * 2.00;
    let valorPapel = (kgPapel / 30) * 3.00;
    let valorMetal = (kgMetal / 50) * 5.00;

    let totalRecebido = valorPlastico + valorPapel + valorMetal;

    alert(`Total a receber pela entrega:\n\n` +
          `Plástico: R$ ${valorPlastico.toFixed(2)}\n` +
          `Papel: R$ ${valorPapel.toFixed(2)}\n` +
          `Metal: R$ ${valorMetal.toFixed(2)}\n\n` +
          `Total: R$ ${totalRecebido.toFixed(2)}`);
}
calcularValorReciclagem();