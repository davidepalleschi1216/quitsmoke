if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrato con successo:', registration);
        })
        .catch(function (error) {
            console.error('Errore durante la registrazione del Service Worker:', error);
        });
}


var Sigarette = 0;
var minuti = 0;
var ore = 0;


function aggiornaSigarette() {
    document.getElementById("Sigarette").innerHTML = Sigarette;
    document.getElementById("Soldi").innerHTML = (0.24 * Sigarette).toFixed(2) + " €";
    if(ore >= 1){
        if(ore === 1){
            document.getElementById("Vita").innerHTML = (ore) + " Ora";
        }else{
            document.getElementById("Vita").innerHTML = (ore) + " Ore";
        }
        
    }else{
        document.getElementById("Vita").innerHTML = (Sigarette * 11) + " Minuti";
    }

    minuti = Sigarette*11;
    ore = Math.floor(minuti/60);
    

}

function Aggiungi() {
    Sigarette++;
    aggiornaSigarette();
}

function Rimuovi() {
    Sigarette--;
    if (Sigarette < 1) {
        Sigarette = 1; // Assicura che il numero di sigarette non scenda al di sotto di 1
    }
    aggiornaSigarette();
}

