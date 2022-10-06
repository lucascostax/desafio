let username = document.getElementById("username")

let numero = document.getElementById("numero")

let botao1 = document.getElementById('botao1')

let botao2 = document.getElementById("botao2")

let botao3 = document.getElementById("botao3")

let nome = document.getElementById('nome')

let dificuldade = document.getElementById('dificuldade')

let valor = 0;

let vidas = 3;

const frase = () => {

    nome.innerHTML = ' Olá ' + username.value + ', vamos jogar!De acordo com a opção de dificudade que você escolheu, descubra o número.'

}

const jogo = () => {

    if (numero.value == valor) {
        tentativas.innerHTML = 'Parabéns ' + username.value + ' conseguiu adivinhar!'
    }
    else if (numero.value > valor) {

        tentativas.innerHTML = 'O número é menor'
    }
    else {
        tentativas.innerHTML = 'O número é maior'
    }
    vidas--
    tentativas.innerHTML
    tentativas2.innerHTML = "<br> Você ainda tem " + vidas + " tentativas"
}

const numero_aleatorio = () => {

    if (dificuldade.value == 'um') {

        valor = Math.floor(Math.random() * 10)
    }

    else if (dificuldade.value == 'dois') {

        valor = Math.floor(Math.random() * 100)
    }

    else if (dificuldade.value == 'tres') {

        valor = Math.floor(Math.random() * 200)
    }

    console.log(valor);
}

const perd3 = () => {

    if (vidas == 0) {

        botao3.innerHTML = '<button id="botao3" onclick="window.location.reload()"> Recarregar </button>';
    }
}

botao1.addEventListener("click", numero_aleatorio)
botao1.addEventListener("click", frase)
botao2.addEventListener("click", jogo)
botao2.addEventListener('click', perd3)