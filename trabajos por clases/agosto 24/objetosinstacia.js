//var x = 12;
/*class Animal{
    constructor () {
        console.log ('se activo a bob')
    }
    mensaje() {
        console.log ('soy el mensaje')
    }
}
var objeto1= new Animal()
objeto1.mensaje ();
*/

class Animal {
    constructor (nombre) {
        this._nombre= nombre;
        //console.log ('se activo el constructor')
    }
    //camel case
    // getnombre (){
        //return this.nombre;
    //}
    get nombre () {
        return this._nombre
    }
    //setnombre(nombre) {
        //this.nombre= nombre;
    //}
    set nombre (nombre) {
        this._nombre=nombre;    
    }
    mensaje () {
        console.log ('soy un mensaje')
    }
}

var objeto1 = new Animal ('conejo');
console.log (objeto1)
objeto1.nombre ='conejo domestico'
console.log (objeto1.nombre)

const obj = {
    get prop() {
      return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
  };
  
  obj.prop = 12;
  
  console.log(obj.prop)

//mision 
//escriba metodos para suma,promedio,mayor o menor escriba una clase que represente un producto comercial de cualquier area debe tener constructor setter y getter y un metodo para calcular despues del iva

class persona {
    constructor(primernombre,apellido){
    this.primernombre = primernombre;
    this.apellido = apellido;
    this.nombre = this.primernombre +' ' + this.apellido
 }}

 let per = new persona ('Johan','Marquez')
 console.log(per.nombre)

 let p2 = new persona  ('Katerin','Guerrero')
console.log(p2.nombre)