import esBisiesto from "./bisiesto";

const form = document.querySelector("#bisiesto-form");
const yearInput = document.querySelector("#anio");
const resultDiv = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const anio = Number.parseInt(yearInput.value);
    
    const resultado = esBisiesto(anio);
    resultDiv.innerHTML = `<p>${anio} ${resultado ? "es un año bisiesto" : "no es un año bisiesto"}</p>`;
});
