// ELEMENTI DELLA PAGINA

const dialogue = document.getElementById("dialogue");

const caligola = document.getElementById("caligola");

const incitatus = document.getElementById("incitatus");

const progress = document.getElementById("progress");

const progressFill = document.getElementById("progressFill");

const nextButton = document.getElementById("nextButton");

const backButton = document.getElementById("backButton");


// SCENE DEL FUMETTO

const scenes = [

    {
        text: "Ciao! Io sono Caligola! Benvenuto nella mia storia!",

        character: "caligola.PNG",

        horse: false
    },

    {
        text: "Sono stato un imperatore romano e ho governato tanti anni fa!",

        character: "caligola parla.PNG",

        horse: false
    },

    {
        text: "Il mio vero nome era Gaio Giulio Cesare Germanico!",

        character: "caligola parla 2.PNG",

        horse: false
    },

    {
        text: "La gente mi chiamava Caligola. Sapete perché?",

        character: "caligola n.PNG",

        horse: false
    },

    {
        text: "Avevo anche un cavallo a cui ero molto affezionato. Si chiamava Incitato!",

        character: "caligola.PNG",

        horse: true
        
    },

    {
        text: "Si racconta che volessi addirittura nominarlo console!",

        character: "caligola parla.PNG",

        horse: true,
        horseImage: "incitatus felice.PNG"
    },

    {
        text: "Eccomi! Sono Incitato! Pare proprio che fossi un cavallo speciale!",

        character: "caligola parla 2.PNG",

        horse: true,

        horseImage: "incitatus felice.PNG"
    },

    {
        text: "E questa è una delle storie più curiose che si raccontano su di me. Alla prossima!",

        character: "caligola triste.PNG",

        horse: true
    }

];


// SCENA CORRENTE

let currentScene = 0;


// MOSTRA LA SCENA

function showScene() {

    const scene = scenes[currentScene];


    // CAMBIA DIALOGO

    dialogue.textContent = scene.text;


    // CAMBIA ESPRESSIONE DI CALIGOLA

    caligola.src = "immagini/" + scene.character;


    // MOSTRA O NASCONDE IL CAVALLO

    if (scene.horse) {

        incitatus.style.display = "block";

        incitatus.classList.remove("visible");

        void incitatus.offsetWidth;

        incitatus.classList.add("visible");

        incitatus.src = "immagini/" +
            (scene.horseImage || "incitatus.PNG");

    } else {

        incitatus.classList.remove("visible");

        incitatus.style.display = "none";

    }


    // AGGIORNA PROGRESSO

    progress.textContent =
        (currentScene + 1) + " / " + scenes.length;


    progressFill.style.width =
        ((currentScene + 1) / scenes.length * 100) + "%";


    // GESTIONE PULSANTI

    backButton.disabled = currentScene === 0;


    nextButton.disabled =
        currentScene === scenes.length - 1;


    if (currentScene === scenes.length - 1) {

        nextButton.textContent = "FINE!";

    } else {

        nextButton.textContent = "AVANTI →";

    }

}


// VAI AVANTI

function nextScene() {

    if (currentScene < scenes.length - 1) {

        currentScene++;

        showScene();

    }

}


// TORNA INDIETRO

function previousScene() {

    if (currentScene > 0) {

        currentScene--;

        showScene();

    }

}


// AVVIO DEL FUMETTO

showScene();
