let idop = 60 * 10;
let idoszalp;
let startGombp = document.getElementById("startp");
let stopGombp = document.getElementById("stopp"); 
let pluszidoszal;
stopGombp.disabled = true;

function idoStartPlusz() {
    idoszalp = setInterval(idok, 1000);
    startGombp.disabled = true;
    stopGombp.disabled = false;
}

function stopPlusz() {
    clearInterval(idoszalp);
    startGombp.disabled = false;
    stopGombp.disabled = true; 
}

function idokp() {
    let ora = document.getElementById("timer");
    if(idop > 0)
    {
        idop--;
    }
    else 
    {
        clearInterval(idokp);
        hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');
    }

    let mp = Math.floor(ido / 60);
    let sp = ido % 60;
    ora.innerHTML = `${m}:${s}`;
}

function plusido()
{
    let perc = parseInt(document.getElementById("plusszInput").value);
    ido += (perc*60)
    pluszidoGomb.disabled = true
    perc.disabled = true
}