function promedio() {
    var nota1 = document.getElementById("txtNota1");
    var nota2 = document.getElementById("txtNota2");
    var nota3 = document.getElementById("txtNota3");

    var promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3;

       document.getElementById("txtPromedio").value = promedio.toFixed(2);  
}
