function Calculadora(){
    num1 = document.getElementById("num1").value;

    /* guarda o valor de radio box*/

    operador = document.querySelector("input[name=opt]:checked").value;

    /* parse converte de string pra inteiro, double, etc */

    resultado = eval(parseInt(num1) / operador);

    document.getElementById("mostrar-resultado").innerHTML = resultado;
    /* innerhtml é tipo document.write mas sem ter que reiniciar a página*/
}