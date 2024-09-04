document.getElementById("titulo").innerHTML = "Calculadora";

function calcular() {
    var numero1 = document.getElementById("txtNumero1");
    var numero2 = document.getElementById("txtNumero2");

    var total= parseFloat(numero1.value) + parseFloat(numero2.value);

    document.getElementById("txtResultado").value = total;


}