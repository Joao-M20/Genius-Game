let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo 
// 3 = azul 

// Seleciona os elementos HTML a partir das classes(div)
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    // gera um numero de 0 a 3
    let colorOrder = Math.floor(Math.random() * 4);

    //Adiciona o numero ao proximo da ordem 
    order[order.length] = colorOrder;
    clickedOrder = [];

    //Inicia a ordem gerada
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//Inicia o elemento em sequencia
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 200);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 60 );
}


let checkorder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            gameover();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}! \nVoce acertou! Iniciando proximo nivel!`);
        nextLevel();
    }
}


//Função para o clique
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");
    
    setTimeout(() => {
        createColorElement(color).classList.remove("selected");

        checkorder();
    }, 250);
}


//Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color ==1) {
        return red; 
    } else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;

    shuffleOrder();
}

let gameover = () => {
    alert(`Pontuação ${score}! \nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);

    order = [];
    clickedOrder = [];

    playgame();
}

let playgame = () => {
    alert("Bem vindo ao Genesis! Iniciando novo jogo!");
    

    score = 0;

    nextLevel();
}


//eventos para clique
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playgame();
