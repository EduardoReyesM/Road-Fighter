//1. seleccionar canvas 
const canvas = document.querySelector("#canvas");
const canvaImage = document.querySelector("#back-imagen")

//. Defino el contexto 2D

const ctx = canvas.getContext("2d");

//Modificar propiedades de texto
 ctx.font = "24px Arial"

//imagen de fondo
const img = new Image();
 img.src = "./img/image.png"

const backgroundImage = {
   img: img,
   x: 0,
   y:0,
   speed: +10,
 
   move: function() {
     this.y += this.speed;
     this.y %= canvaImage.height;
   },
 
   draw: function() {
     ctx.drawImage(this.img, 0, this.y, 1000, 700);
     if (this.speed < 0) {
       ctx.drawImage(this.img, 0, this.y + this.img.height, 1000, 700);
     } else {
       ctx.drawImage(this.img, 0, this.y - canvaImage.height, 1000, 700);
     }
   },
 };
 
 function renderMainCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = "black";
   ctx.font = "50px monospace";
   ctx.fillText('jack', 100, 200);
 }
 
 function updateBackgroundCanvas() {
   backgroundImage.move();
   renderMainCanvas();
   // ctx.clearRect(0, 0, canvaImage.width, canvaImage.height);
   backgroundImage.draw();
   
   // requestAnimationFrame(updateBack);
 }
     


// cargar imagenes de personaje
const img1 = new Image()
img1.src = "./img/img1.png"

//cargar imagenes enemys
const ene1 = new Image()
const ene2 = new Image()
// const ene3 = new Image()
ene1.src = "./img/img3.5.png"
ene2.src = "./img/img2.5.png"
//ene3.src = "./img/truck.png"

// carro agrega puntos
const punto = new Image()
punto.src = "./img/punto.png"



const coredorMalo = [];
//Medidas 1000 - 700

// ctx.fillRect(490, 600, 10, 10);

//Ensenar mi personaje(auto)
class roadFighter{
    constructor(ctx , posicionX, posicionY, imagen){
        this.nombre = "roadFighter";
        this.vidas = 3;
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.imagen = imagen;
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
        if(this.posicionX >= 170){
            this.posicionX = this.posicionX - 20;
        }
    }   
    

      //derecho
      derecho(){
        if(this.posicionX <= 610){
        this.posicionX = this.posicionX + 20;
      }
    }

     //dibujar 
     dibujarse(){
        //this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
        this.ctx.drawImage(this.imagen, this.posicionX, this.posicionY, 120, 120);

        //vidas
        // this.ctx.fillText('vidas', ${});
     }

     pierdeVida(){
        this.vidas = this.vidas - 1;
     }

}
let personaje = new roadFighter(ctx, 400, 600, img1);
    // console.log(personaje);


    // definir enemigo1
class Enemy {
    constructor(ctx , posicionX, posicionY, imagen){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.imagen = imagen;
        this.ctx = ctx;
     }
     
     // adelante 
     adelante(){
       //console.log("posY", this.posicionY);
       this.posicionY = this.posicionY - 10;
     }

     //atras
     atras(){
        this.posicionY = this.posicionY  + 15;
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
        //this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
        this.ctx.drawImage(this.imagen, this.posicionX, this.posicionY, 55, 55);
     }

}


// enemigo 2

class Enemy2 {
    constructor(ctx , posicionX, posicionY, imagen){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.imagen = imagen;
        this.ctx = ctx;
     }
     
     // adelante 
     adelante(){
       //console.log("posY", this.posicionY);
       this.posicionY = this.posicionY - 10;
     }

     /*atras
     atras(){
        this.posicionY = this.posicionY  + 10;
     }*/

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
        //this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
        this.ctx.drawImage(this.imagen, this.posicionX, this.posicionY, 160, 160);
     }

}

// enemigo 3
/* class Enemy3 {
    constructor(ctx , posicionX, posicionY, imagen){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.imagen = imagen;
        this.ctx = ctx;
     }
     
     // adelante 
     adelante(){
       //console.log("posY", this.posicionY);
       this.posicionY = this.posicionY - 10;
     }

     /*atras
     atras(){
        this.posicionY = this.posicionY  + 10;
     }*/

     //izquierdo
    /*izquierdo(){
        this.posicionX = this.posicionX - 10;
    }

      //derecho
      derecho(){
        this.posicionX = this.posicionX + 10;
     }

     //dibujar 
     dibujarse(){
        //this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
        this.ctx.drawImage(this.imagen, this.posicionX, this.posicionY, 180, 180);
     }

}
const corredor3 = new Enemy(ctx,380,150, ene3); */

// carro que da puntos

class puntosMeta {
    constructor(ctx , posicionX, posicionY, imagen){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.imagen = imagen;
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
        //this.ctx.fillRect(this.posicionX, this.posicionY, 10, 10);
        this.ctx.drawImage(this.imagen, this.posicionX, this.posicionY, 180, 180);
     }

}
const agrega = new Enemy(ctx,240,250, punto); 

    






// Ejecutar el videojuego!
    setInterval(() => {
  console.log("ejecutar videojuego");

//borrar el lienzo
ctx.clearRect(0, 0, 1000, 700);
    updateBackgroundCanvas()
 // personaje
 personaje.dibujarse();


// recorrer el arreglo de los enemigos y por cada uno
  // dibujarlo y agregarle en x
  coredorMalo.forEach((corredor, index) => {
    corredor.dibujarse();
    corredor.atras();
    //verificar si sale de canvas
    if(corredor.posicionY > 700){
        coredorMalo.splice(index,1)
    }
    //verificar colicion con personaje 
    if(
        corredor.posicionY >= personaje.posicionY &&
        corredor.posicionX >= personaje.posicionX &&
        corredor.posicionX <= personaje.posicionX + 50 
        ){
     // alert("chocaste");
    }
  });
  //corredor.atras();
  //corredor.dibujarse();
 // corredor2.dibujarse();
  //corredor3.dibujarse();
  //agrega.dibujarse();


 // coliciones en Y
 //if(personaje.posicionY <= corredor.posicionY) {
   // alert("tocaron");
    //personaje.pierdeVida();
 //} 
}, 1000/60);

setInterval(() => {

    const posicionX = Math.floor(Math.random()* 480);
    // corredor enemigos 170, 650
  const corredor = new Enemy(ctx, posicionX + 170, 0, ene1);
  coredorMalo.push(corredor);

}, 500);



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
});

