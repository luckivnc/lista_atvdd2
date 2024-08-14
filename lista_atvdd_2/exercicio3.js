//3) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 
function converterTemperatura() {
    let tempCelsius = prompt("Digite a temperatura em graus Celsius:");
    let tempCelsiusFloat = parseFloat(tempCelsius);
    let tempFahrenheit = (tempCelsiusFloat * 9/5) + 32;
    let mensagem = "Temperatura convertida para Fahrenheit:\n";
    mensagem += tempCelsiusFloat + " graus Celsius equivalem a " + tempFahrenheit.toFixed(2) + " graus Fahrenheit.";

    alert(mensagem);
}

converterTemperatura();