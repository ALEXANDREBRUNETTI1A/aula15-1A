//prepara e rodar um código
function setup() {
   createCanvas(800,600);//criar tela
          
 background("green");
}

//respnsável por desenhar 
function draw() {
  stroke("rgb(251,255,0)");
  fill("purple");

  if(mouseIsPressed){
   rect(mouseX, mouseY, 40, 40);
  }
}    