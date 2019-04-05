document.addEventListener('keydown',function (evento) {
if(evento.keyCode == 32)
{
  console.log("saltaa");

  if(nivel.muerto==false)
  {saltar();}
  else {
    nivel.velocidad =9;
    flama2.velocidad=9;
    flama3.velocidad= 8;
    flama4.velocidad=10;
    flama.x=ancho+100;
    flama2.x=ancho+100;
    flama3.x=ancho+100;
    flama4.x=ancho+100;
    nivel.puntos=0;
    nivel.muerto=false;
    tredx.y=limite;
    redx=base;
  }

}

})


var suelo,enemigo,redx;

function objetos(){// para todos los scripts que voy manejando
suelo= new Image();
enemigo= new Image();
redx= new Image();
base= new Image();
redxf= new Image();
redx1= new Image();
redx2= new Image();
redx3= new Image();
redx4= new Image();

suelo.src="img/fondo.jpg"
enemigo.src="img/enemigo.png"
redx.src="img/redx.png"
base.src="img/redx.png"
redxf.src="img/redxf.png"
redx1.src="img/redx1.png"
redx2.src="img/redx2.png"
redx3.src="img/redx3.png"
redx4.src="img/redx4.png"
}


var FPS=60;//cuadros por segundo de mi juego

var ancho=800;
var alto=400;
var canv,con;
var limite=300;
var nivel={velocidad: 9,puntos: 0,muerto:false};
var flama={x:ancho+100 ,y:limite+25};
var flama2={ x:ancho+100 ,y:limite+25,velocidad: 9};
var flama3={ x:ancho+100 ,y:limite-150,velocidad: 8};
var flama4={ x:ancho+100 ,y: 40,velocidad: 10};
var fondol={x:0 , y:0};

function inicia(){
  canv= document.getElementById('canvas');//igualo las variables para no trabajar con todo el codigo
  con= canv.getContext('2d'); // especifico que trabajare en 2d
  objetos();
}

function cls(){  //borra la pantalla
 canv.width= ancho;
 canv.height= alto;

}
//---------------------------------------------------------------------------------------
function obstaculo3(){//dibuja el obstaculo3
con.drawImage(enemigo,0,0,413,549,flama3.x,flama3.y,40,30);
}


function mov3(){ //para el movimiento de la flamita2
if(flama3.x <-100)
{
  flama3.x= ancho +100;
  nivel.puntos++;
}

else
{
  flama3.x -= flama3.velocidad;
}
}

function obstaculo4(){//dibuja el obstaculo4
con.drawImage(enemigo,0,0,413,549,flama4.x,flama4.y,40,30);
}


function mov4(){ //para el movimiento de la flamita4
if(flama4.x <-100)
{
  flama4.x= ancho +100;
  nivel.puntos++;
}

else
{
  flama4.x -= flama4.velocidad;
}
}

//---------------------------------------------------------------------------------------
var tredx={y: limite,vy:0, gravedad:2,salto:28,vymax: 9,saltando:false};//variables del alien

function posredx(){ //dibuja a alien
  con.drawImage(redx,0,0,500,476,50,tredx.y,75,75);

}
function obstaculo(){//dibuja la flamita
con.drawImage(enemigo,0,0,413,549,flama.x,flama.y,40,30);
}

function obstaculo2(){//dibuja el obstaculo2
con.drawImage(enemigo,0,0,413,549,flama2.x,flama2.y,40,30);
}

function mov(){ //para el movimiento de la flamita
if(flama.x <-100)
{
  flama.x= ancho +100;
  nivel.puntos++;
}

else
{
  flama.x -= nivel.velocidad;
}
}
function mov2(){ //para el movimiento de la flamita2
if(flama2.x <-20)
{
  flama2.x= ancho +20;
  nivel.puntos++;
}

else
{
  flama2.x -= flama2.velocidad;
}
}

function saltar()//funcion saltar del alien
{
  tredx.saltando=true;
tredx.vy=tredx.salto;

}

function gravedad(){//para la gravedad del alien

  if(tredx.y <-20){//marca limite hacia arriba
  tredx.vy=0;
}

if(tredx.saltando==true)
{
  if(tredx.y - tredx.vy - tredx.gravedad >limite)
  {
    tredx.saltando=false;
    tredx.vy=0;
    tredx.y=limite;
  }
  else {
    tredx.vy-=tredx.gravedad;
    tredx.y-=tredx.vy;
  }

}
}
//------------------------------------------------------

function fon()
{
  con.drawImage(suelo,fondol.x,0,800,400,0,fondol.y,800,400);
}

//-----------------------------------------------------

function colision()
{
  if(flama.x >= 50 && flama.x <=125)
  {
    if (tredx.y >= limite)
    {
      nivel.muerto= true;
      nivel.velocidad= 0;
      flama2.velocidad=0;
      flama3.velocidad=0;
      flama4.velocidad=0;


    }
  }
  else if(flama2.x >= 50 && flama2.x <=125)
  {
    if (tredx.y >= limite)
    {
      nivel.muerto= true;
      nivel.velocidad= 0;
      flama2.velocidad=0;
      flama3.velocidad=0;
      flama4.velocidad=0;


    }
  }
  else if(flama3.x >= 50 && flama3.x <=118)
  {
    if (tredx.y <=limite-150 && tredx.y >=limite-230)
    {
      nivel.muerto= true;
      nivel.velocidad= 0;
      flama2.velocidad=0;
      flama3.velocidad=0;
      flama4.velocidad=0;
       tredx.saltando=false;

    }
  }

  else if(flama4.x >= 50 && flama4.x <=118)
  {
    if (tredx.y <=40)
    {
      nivel.muerto= true;
      nivel.velocidad= 0;
      flama2.velocidad=0;
      flama3.velocidad=0;
      flama4.velocidad=0;
       tredx.saltando=false;

    }
  }
}


function puntaje(){
con.font="30px impact";
con.fillStyle='#35b426';
  con.fillText(`${nivel.puntos}`,700,50);

if(nivel.muerto==true)
{
  con.font= "80px impact";
  con.fillStyle='rgb(205, 32, 32)';
  con.fillText('GAME OVER',250,150);
}
if(nivel.puntos==30)
{
 redx=redx1;
 nivel.velocidad= 11;
 flama2.velocidad=12;
 flama3.velocidad=11;
 flama4.velocidad=12;
}
if(nivel.puntos==50)
{
 redx=redx2;
 nivel.velocidad= 12;
 flama2.velocidad=11;
 flama3.velocidad=12;
 flama4.velocidad=12;
}
if(nivel.puntos==70)
{
 redx=redx3;
 nivel.velocidad= 13;
 flama2.velocidad=11;
 flama3.velocidad=12;
 flama4.velocidad=13;
}
if(nivel.puntos==100)
{
 redx=redx4;
 nivel.velocidad= 13;
 flama2.velocidad=13;
 flama3.velocidad=13;
 flama4.velocidad=13;
}
if(nivel.puntos==200)
{
 redx=redxf;
 nivel.velocidad= 14;
 flama2.velocidad=14;
 flama3.velocidad=14;
 flama4.velocidad=14;
}


}

//ciclo


setInterval(function(){

juego();
},1000/FPS)

 function juego(){  //funcion principal manda a llamar a las funciones
   cls();
   gravedad();
   fon();
   colision();
   obstaculo2();
   mov2();
   obstaculo3();
   mov3();
   obstaculo4();
   mov4();
   mov();
   obstaculo();
   posredx();
   puntaje();
 }
