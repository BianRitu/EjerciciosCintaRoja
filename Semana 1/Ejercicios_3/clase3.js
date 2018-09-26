//this.(atributo del animal) =(atributo que le da valor)
//objetos tiene metodos get y set

class Animal {

    constructor(tamanio, color,alimentacion){
        this.tamanio = tamanio;
        this.color = color;
        this.alimentacion = alimentacion;
    }

    //método Get -> no recibe no se cambia
    getTamanio(){
        return this.tamanio;
    }

    getColor(){
        return this.color;
    }

    //método set, se pueda modificar los atributos

    setTamanio(tamanio){
        this.tamanio =tamanio;

    }

    setColor(color){
        this.color =color;
    }

    correr(){
        return "El animal está corriendo y es de" + this.color;
    }

    irBanio(){
        return "El animal" + this.tamanio + "va al baño";

    }

    saludar(color){
        return "El animal de" + this.color + "saluda a color" + color;
    }
}
//instanciar --> darle valores reales
    let perroChihuahua = new Animal("Muy grande", "negro", "chihuahua","pizza");
    let sanBernardo = new Animal("Grandote", "rojo","sanBernardo", "flores")
    console.log(perroChihuahua.getColor());

    console.log(perroChihuahua.correr());

    console.log(perroChihuahua.saludar(sanBernardo.getColor()));






