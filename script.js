let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;


//Inicia o canvas
function criarBG() {
    //Cor do bg
    context.fillStyle = "lightgreen";
    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();