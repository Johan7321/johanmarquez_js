// Escriba métodos para suma, promedio, mayor, menor. 
/*
function suma (n1,n2 ){
    total = n1 + n2
    console.log (total)
}
suma (7,9)

function promedio (t){
    v = []
    suma = 0
    for (let i=0; i < t; i++){
        v[i]= Math.round(Math.random()*100)}
    console.log(v)
    }
promedio(2)

function max (t){
    v = []
    suma = 0
    for (let i=0; i < t; i++){
        v[i]= Math.round(Math.random()*100)}
    console.log(v)
    console.log( Math.max.apply(null, v))
    }
max(10)     

function min (t){
    v = []
    suma = 0
    for (let i=0; i < t; i++){
        v[i]= Math.round(Math.random()*100)}
    console.log(v)
    console.log( Math.min.apply(null, v))
    }
min(10)   


/*Escriba una clase que represente un producto 
comercial de cualquier área. Debe tener constructor, 
setters, getters y un método para calcular el valor despues de IVA */
/*
 class gomitas {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre
        this.peso = peso
        this.color = color
        this.precio = precio
        }
        get iva () {
            return this._iva
        }
        set iva (iva) {
            let pv = this.precio *iva
            console.log ('El iva es: ',pv)
            let total = this.precio+pv
            console.log ('El precio total es: ',total)
        }

    }
let gomitas1 = new gomitas ("Trululu",24,"amarillo",2000)
console.log(gomitas1)
gomitas1.iva = 0.20

*/

// Libro 
//primer ejercicios
/*
class persona {
    constructor(primernombre,apellido){
    this.primernombre = primernombre;
    this.apellido = apellido;
 }}

 let pe = new persona ('Vanessa','Rodriguez')
 console.log('holiss',pe.primernombre,pe.apellido)

 let p1 = new persona  ('Katerin','Guerrero')
console.log('holisss',p1.primernombre,p1.apellido)
*/

 //segundos ejercicios

 class persona {
    constructor(primernombre,apellido){
    this.primernombre = primernombre;
    this.apellido = apellido;
    this.nombre = this.primernombre +' ' + this.apellido
 }}

 let pe = new persona ('Vanessa','Rodriguez')
 console.log(pe.nombre)

 let p1 = new persona  ('Katerin','Guerrero')
console.log(p1.nombre)

class computedor {
    constructor(Pulgadas_pantalla,memoria,marca,precio,discoduro){
        this.Pulgadas_pantalla= Pulgadas_pantalla;
        this.memoria = memoria;
        this.marca = marca;
        this.precio = precio;
        this.discoduro = discoduro;
    }
    get iva1 (){
        this.iva1 = iva1;
    }
    set iva1 (iva1) {
        let pv = this.precio *iva1
        console.log ('El iva es: ',pv)
        let total = this.precio+pv
        console.log ('El precio total es: ',total)
    }
}

let lenovo = new computedor(16,'4 ram','Lenovo',12000000,'Solido')
console.log(lenovo)
lenovo.iva1 = 0.5



class celular extends computedor {
    constructor(Pulgadas_pantalla,memoria,marca,precio,color){
        super(Pulgadas_pantalla,memoria,marca,precio);
        this.color = color;
    }
}

let huawei = new celular (6,'4 ram','huawei','700000','azul')
console.log(huawei)

class Persona{
    constructor (nombre,documento){
        this._nombre = nombre;
        this._documento = documento;
    }
    set nombre(nombre) {
        this._nombre = nombre;
     }
    set documento(documento) {
        this._documento = documento;
    }
    get nombre() { return this._nombre; }
    get documento() { return this._documento}
}

class Aprendiz extends Persona { 
    constructor (nombre, documento,ficha){
        super(nombre,documento)
        this.ficha = ficha;
    }set ficha(ficha) { this._ficha = ficha }
     get ficha() { return this._ficha; }}


let PM = new Persona ('Maria Gomez',2345)
let PM2 = new Aprendiz ('Juan Valdez',645786 ,'Adsi')

console.log(PM)
console.log(PM2)



