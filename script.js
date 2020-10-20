let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

//Inicia o canvas
function criarBG() {
    //Cor do bg
    context.fillStyle = "lightgreen";
    //x, y, altura, largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Adicionar um elemento e tirar o último para a cobrinha andar
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        //Cor
        context.fillStyle = "green";
        //Tamanho
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    //Posição inicial
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Coordenadas
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;

    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //Retirar o último elemento para a cobrinha 'andar'
    snake.pop();
}

//Atualizar o jogo de tempos em tempos até o jogo acabar
let jogo = setInterval(iniciarJogo, 100);