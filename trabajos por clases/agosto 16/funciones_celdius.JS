//EJERCICIO

//2. Genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.

function cfc(celcius) {
    let resultado = celcius  * 1.8 + 32;
    return resultado; 
}

function convertirFahrenheit(Fahrenheit) {
    let resultado = (Fahrenheit - 32) * 5 / 9;
    return resultado;
}

let celcius = 32;
let resultado = cfc(celcius);
console.log( `${celcius}°C = ${resultado}°F`);

let Fahrenheit = resultado;
resultado = convertirFahrenheit(Fahrenheit);
console.log(`${Fahrenheit}°F = ${resultado}°C`);





function cck(celcius) {
    let resultado = celcius  + 273.15
    return resultado;
}

let Kelvin = resultado;
resultado = cck(Kelvin);
console.log(`${Kelvin}°K = ${resultado}°C`); 







function ccr(celcius) {
    let resultado = celcius * 9 / 5.0 + 32;
    return resultado;
}




let Rankine = resultado;
resultado = ccr(Rankine);
console.log(`${Rankine}°R = ${resultado}°C`);





