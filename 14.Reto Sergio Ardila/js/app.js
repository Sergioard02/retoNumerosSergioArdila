'use strict'
const numeros = [];
const resultados = document.getElementById("resultado");
const numeroInput = document.getElementById("numeroInput");
const agregarBoton = document.getElementById("agregarBoton");
setInterval(calcularMayorMenor, 1000); //se utiliza comúnmente para establecer un retardo en funciones que son ejecutadas una y otra vez

agregarBoton.addEventListener("click", () => { //es un escuchador que indica al navegador que este atento a la interacción del usuario.
const inputValue = parseInt(numeroInput.value);

if (!isNaN(inputValue)) { //intenta convertir el parámetro pasado a un número.
        numeros.push(inputValue); //añade uno o más elementos al final de un array 
        numeroInput.value; // devuelve un array cuyos elementos son valores de propiedades enumarables
    }
});

function calcularMayorMenor() {
    if (numeros.length === 0) { //indica el número de argumentos que una función requiere
        return;
    }

    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
                mayor = numeros[i];
            }

        if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }

    resultados.textContent = `El número mayor es: ${mayor}
    \n El número menor es: ${menor}`;
}

        