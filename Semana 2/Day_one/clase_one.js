/*
class animal{
    constructor(nombre, peso){
        console.log ("Se crea el objeto animal");
        this.nombre = nombre;
        this.peso = peso;
    }

    comer(){
        return "El animal esta comiendo";
    }
}



class perro extends animal{
constructor(color, raza){
    super(nombre,peso);
    console.log ("Se crea el objeto perro");
    this.color =color;
    this.raza = raza;
  
}

ladrar(){
    return "Guau";
}
}

class gato extends animal{
    constructor(color, pelaje, nombre, peso){
        super(nombre, peso);
        this.color = color;
        this.pelaje = pelaje;
      
    }

maullar(){
    return "Miau";
}
}

const pug = new perro ("blue","SanBernardo","Perri","3kg");
console.log(pug.comer());
console.log = new GainNode("Blue","Largo","Pelos","4 kg");

*/

//LISKOV

class Largometraje{
    constructor(tiempo, titulo){
        this.tiempo =tiempo;
        this.titulo =titulo;
    }
        getTitulo(){
            return this.titulo;
         
        }
}

class Pelicula extends Largometraje{
    constructor(tiempo, titulo, genero){
        super(titulo,tiempo);
        this.genero =genero;
    }
}

class Documental extends Largometraje{
    constructor(tiempo, titulo, clasificacion){
        super(tiempo, titulo);
        //this.tiempo =tiempo;
        //this.titulo =titulo;
        this.clasificacion = clasificacion;

    }
}

class SalaCine{
    constructor(sala, largometraje){
        this.sala = sala;
        this.largometraje = largometraje;
    }
    reproducir(){
        return `Reproduciendo ... ${this.largometraje.getTitulo()}}`
    }
}

const documental = new  Documental('10','animales Salvajes');
const matrix = new Pelicula('120 min','matrix','Ciencia Ficción');
const salaCine = new SalaCine('imax',documental);
console.log(salaCine.reproducir())


//EJERCICIO 2
//////////////////////////////////////////////////////////////////////////

class Figura{
    constructor (color,textura ){
        this.color = color;
        this.textura = textura;
    }

    miFigura(){
        return "    Mi figura shida";
    }
}

class Triangulo extends Figura {
    constructor(color,textura){
    super(color, textura);

}
    miTriangulo(){
        return "Este es un triangulo";
    }
}

class Rectangulo extends Figura{
    constructor(color,textura){
    super(color, textura);
    }
    miRectangulo(){
        return "Este es un rectangulo";
    }
}

const figurin = new Figura ("azul","biscozo");
console.log(figurin.miFigura())


////////////////////////////////////////////////////////////////////////

class Construccion{
     constructor(num_puertas, ventanas, num_piso, direccion, altura,largo, ancho_tereno){
         this.num_puertas =num_puertas;
         this.ventanas = ventanas;
         this.num_piso = num_piso;
         this.direccion = direccion;
         this.altura =altura;
         this.largo = largo;
         this.ancho_tereno = ancho_tereno;
     }
     misCuadrados(){
         return this.largo*this.altura;
     }

     getDireccion(){
         return this.direccion;
     }

    setDireccion(newAdress){
       this.direccion= newAdress;
     }


}

class Casa extends Construccion{
    constructor(num_puertas, ventanas, num_piso, direccion, altura,largo, ancho_tereno){
    super(num_puertas,ventanas,num_piso,direccion,altura,largo,ancho_tereno);
    }
}

class Edificio extends Construccion{
    constructor(num_puertas, ventanas, num_piso, direccion, altura,largo, ancho_tereno){
    super(num_puertas,ventanas,num_piso,direccion,altura,largo,ancho_tereno);
    }
}

const area = new Construccion(4, 20, 10,"lejana", "15",200,400);
console.log(area.getDireccion())
console.log(area.misCuadrados());


//////////////////////////////////////////////////////////////////////////

class Cuenta{
    constructor(titular, cantidad){
        this.titular =titular;
        this.cantidad =cantidad;
    }

    ingresar(cantidad){
        if(this.cantidad +cantidad > 900){
            return "No puede retirar mas de $900";
        }else{
            this.cantidad = this.cantidad +cantidad;
            return "Su retiro ha sido satisfactorio" + this.cantidad;
        }
    }

    retirar(cantidad){
        if(this.cantidad - cantidad < 10){
            return "No puede retirar menos de $10";
        }else{
            this.cantidad = this.cantidad - cantidad;
            return "Usted ha retirado"+ cantidad +"de" + this.cantidad;
        }

    }
}

let miRetiro = new Cuenta ("Bianca Prado", 1000);
console.log(miRetiro.ingresar(1000))
console.log(miRetiro.retirar(2000))

/////////////////////////////////////////////////////


class Electrodomestico{
    constructor(precio, color, consumoEnergetico, peso){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }   
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, consumoEnergetico, peso, carga){
        super(precio, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    precioFinal(){
        return this.consumoEnergetico*this.carga;
    }

}

let miData = new Electrodomestico (10000, "plata", 3000, 50);
let lavando = new Lavadora (10000, "plata", 3000, 50,90);
//console.log(miData.precioFinal());
console.log(lavando.precioFinal());