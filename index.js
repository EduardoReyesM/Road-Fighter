//1. seleccionar canvas 

const canvas = document.querySelector("canvas");

//. Defino el contexto 2D

const ctx = canvas.getContext("2d");
//Medidas 1000 - 800

// ctx.fillRect(145, 124, 10, 10);

//Ensenar mi personaje(auto)

class roadFighter{
    constructor(ctx , posicionX, posicionY){
        this.nombre = "roadFighter";
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.ctx = ctx;
     }
     
     // adelante 
     adelante(){
       //console.log("posY", this.posicionY);
       this.posicionY = this.posicionY - 10;
     }

     //atras
     atras(){
        this.posicionY = this.posicionY  + 10;
     }

     //izquierdo
    izquierdo(){
        this.posicionX = this.posicionX - 10;
    }

      //derecho
      derecho(){
        this.posicionX = this.posicionX + 10;
     }

     //dibujar 
     dibujarse(){
        this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
     }

}

let personaje = new roadFighter(ctx, 145, 138);
    // console.log(personaje);


    // Ejecutar el videojuego!

setInterval(() => {
  console.log("ejecutar videojuego");

//borrar el lienzo
ctx.clearRect(0, 0, 1000, 700);

  
  personaje.dibujarse();
}, 100);



// escuchar el teclado

window.addEventListener("keyup", (evento) => {
  console.log("tecla presionada", evento.code);

 // opciones de teclado
 switch(evento.code){
    case "ArrowUp":
     personaje.adelante();
     break;
     case "ArrowDown":
     personaje.atras();
     break;
     case "ArrowLeft":
     personaje.izquierdo();
     break;
     case "ArrowRight":
     personaje.derecho();
     break;
 }   
})