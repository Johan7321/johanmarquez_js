// es un procedimiento el cual podemos decir paso a paso lo que queremos hacer y asi mismo ingresar variables
function sumar (a,b) {
    return a + b
}
let total = sumar (10,20)
console.log(total)

function saludar () {
    console.log("hola soacha")
} 
saludar()

let nom = ["Vane","Juan","Johan","Angie","Maicol","kate","Ana","Alfonso","Laura","Beos","Tatiana","Leandra","Alejandra","Esteban","Karol"]
    t3 = Math.round(Math.random()*nom.length)
function saludar1 () {
    console.log("hola "+nom[t3])
} 
saludar1()