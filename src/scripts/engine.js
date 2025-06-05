
// INTERFACE
const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮"
];

let openCards = [];

// EMBARALHA
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// CRIA AS CAIXAS
for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// FUNÇÕES
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
}

// VERIFICA SE AS CAIXAS SÃO IGUAIS
function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você ganhou! Seu tempo foi: " + document.getElementById("time").textContent);
    }
}

// TIMER
let segundos = 0;
let minutos = 0;

const timerElement = document.getElementById("time");

const intervalo = setInterval(() => {
    segundos++;

    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }

    // Formatação para sempre mostrar dois dígitos nos segundos
    const tempoFormatado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    timerElement.textContent = tempoFormatado;

    // Se quiser parar o timer quando o jogo terminar, adicione isso:
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        clearInterval(intervalo);
    }
}, 1000);