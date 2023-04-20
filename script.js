

let chrono = document.getElementById("chrono")
let resetBtn = document.getElementById("reset")
let stopBtn = document.getElementById("stop")
let startBtn = document.getElementById("start")


let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
    if (estArrete) {     //si temps est arrete
        estArrete = false;    //alors temps arreter devient faux
        defilerTemps();    //on appelle la fonction pour démarer le chrono qu'on déclarera plus tard
    }
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout)
    }
}

const defilerTemps = () => {
    if (estArrete) return;

    secondes = parseInt(secondes); //converti les strings en int pour pouvoir incrémenter la valeur
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++ ; // a chaque fois que cette fonction est appelée, les secondes augmentent

    if (secondes > 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes > 60) {
        heures++;
        minutes = 0
    }



    // affichage

    if(secondes<10) {
        secondes = "0" + secondes;
    }

    if(minutes<10) {
        minutes = "0" + minutes;
    }

    if(heures<10) {
        heures = "0" + heures;
    }
    
    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    timeout = setTimeout(defilerTemps, 1000); // toutes les milles milliscondes (1s) on déclence la fonction defiler temps
}

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    secondes = 0;
    minutes = 0;
    heures = 0;
    clearTimeout(timeout)
};

startBtn.addEventListener("click", demarrer); // dès qu'il y à un click on déclenche la fonction
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);




horloge = document.getElementById("horloge")

let heure = () => {
    let d = new Date();    
    horloge.textContent = d.toLocaleTimeString("fr");
    setTimeout(heure, 1000)
}
heure()

date = document.getElementById("date")

let dates = () => {
    let d = new Date();    
    date.textContent = d.toLocaleDateString("fr");
    setTimeout(heure, 1000)
}
dates();