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

    // PRESENTAZIONE

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


    // AZIONI POSITIVE

    {
        text: "Durante il mio governo ho organizzato feste e giochi per rendere felice il mio popolo!",
        character: "caligola.PNG",
        horse: false
    },

    {
        text: "Ho speso tanti dei miei soldi per organizzare feste e giochi e rendere felice il mio popolo!",
        character: "caligola parla.PNG",
        horse: false
    },

    {
        text: "Ho fatto costruire tante nuove strutture per aiutare i cittadini!",
        character: "caligola parla 2.PNG",
        horse: false
    },

    {
        text: "Ho completato bellissime opere d'arte per rendere Roma ancora più bella!",
        character: "caligola.PNG",
        horse: false
    },


    // AZIONI NEGATIVE

    {
        text: "Non sempre andavo d'accordo con chi lavorava per me. Persino il filosofo Seneca rischiò di essere punito!",
        character: "caligola triste.PNG",
        horse: false
    },

    {
        text: "Quando diventai imperatore, non accettavo facilmente le opinioni diverse dalle mie e spesso trattavo male i senatori!",
        character: "caligola parla.PNG",
        horse: false
    },

    {
        text: "A volte reagivo in modo esagerato e facevo punire chi mi faceva arrabbiare!",
        character: "caligola triste.PNG",
        horse: false
    },


    // INCITATO

    {
        text: "Però avevo un grandissimo amico a cui volevo davvero tanto bene: il mio cavallo Incitato!",
        character: "caligola.PNG",
        horse: true,
        horseImage: "incitatus felice.PNG"
    },

    {
        text: "Gli ero così affezionato che, pensate un po', volevo addirittura nominarlo senatore!",
        character: "caligola parla.PNG",
        horse: true,
        horseImage: "incitatus s.PNG"
    },


    // FINALE

    {
        text: "Ancora oggi le persone hanno opinioni diverse su di me...",
        character: "caligola triste.PNG",
        horse: false
    },

    {
        text: "Ma io sono convinto di essere stato un imperatore straordinario!",
        character: "caligola.PNG",
        horse: false
    },

    {
        text: "E voi, cosa ne pensate di Caligola?",
        character: "caligola.PNG",
        horse: false
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


    // MOSTRA O NASCONDE INCITATO

    if (scene.horse) {

        incitatus.src = "immagini/" + scene.horseImage;

        incitatus.style.display = "block";

        incitatus.classList.remove("horse");

        void incitatus.offsetWidth;

        incitatus.classList.add("horse");

    } else {

        incitatus.style.display = "none";

    }


    // AGGIORNA IL PROGRESSO

    progress.textContent =
        (currentScene + 1) + " / " + scenes.length;

    progressFill.style.width =
        ((currentScene + 1) / scenes.length * 100) + "%";


    // GESTIONE PULSANTI

    backButton.disabled = currentScene === 0;

    nextButton.disabled = currentScene === scenes.length - 1;


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


// COLLEGA I PULSANTI

nextButton.addEventListener("click", nextScene);

backButton.addEventListener("click", previousScene);


// AVVIO DEL FUMETTO

showScene();
