//2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 
function calcularIdade() {
    let anoNascimento = prompt("Digite o ano do seu nascimento (0000):");
    let anoAtual = prompt("Digite o ano atual (0000):");

    let anoNasc = parseInt(anoNascimento);
    let anoAtualInt = parseInt(anoAtual);

    let idadeAnos = anoAtualInt - anoNasc;

    let idadeMeses = idadeAnos * 12;

    let dataNascimento = new Date(anoNasc, 0); 
    let dataAtual = new Date(anoAtualInt, 0); 
    let diferencaTempo = dataAtual.getTime() - dataNascimento.getTime();
    let idadeDias = Math.floor(diferencaTempo / (1000 * 3600 * 24));

    let idadeSemanas = Math.floor(idadeDias / 7);

    let mensagem = "Idade:\n";
    mensagem += "Anos: " + idadeAnos + "\n";
    mensagem += "Meses: " + idadeMeses + "\n";
    mensagem += "Dias: " + idadeDias + "\n";
    mensagem += "Semanas: " + idadeSemanas;

    alert(mensagem);
}
calcularIdade();