let ido = 60 * 10;
let idoszal;
let startGomb = document.getElementById("start");
let stopGomb = document.getElementById("stop"); 
let pluszidoszal;
let pluszidoGomb = document.getElementById("pluszido"); 

let pidoszal;
let startGombPlusz = document.getElementById("startP");
let stopGombPlusz = document.getElementById("stopP");
stopGomb.disabled = true;
let pperc = 0;

function idoStart() {
    idoszal = setInterval(idok, 10);
    startGomb.disabled = true;
    stopGomb.disabled = false;
}

function stop() {
    clearInterval(idoszal);
    startGomb.disabled = false;
    stopGomb.disabled = true; 
}

function idok() {
    let ora = document.getElementById("timer");
    if(ido > 0)
    {
        ido--;
    }
    else 
    {
        clearInterval(idoszal);
        //hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');
    }

    let m = Math.floor(ido / 60);
    let s = ido % 60;
    ora.innerHTML = `${m}:${s}`;
    
    if(ido == 0)
    {
        startGombPlusz.disabled = false;
        stopGombPlusz.disabled = false;
    }

        
}
/*
function plusido()
{
    let perc = parseInt(document.getElementById("plusszInput").value);
    ido+= (perc*60)
    pluszidoGomb.disabled = true
    perc.disabled = true
}
*/






function pluszido()
{
    
    let pluszora = document.getElementById("plusztimer");
    if(pperc > 0)
    {
        pperc--;
    }
    else 
    {
        clearInterval(pidoszal);
        //hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');
    }

    let pm = Math.floor(pperc / 60);
    let ps = pperc % 60;
    pluszora.innerHTML = `${pm}:${ps}`;
}

function idoStartPlusz() {
    pperc = parseInt(document.getElementById("plusszInput").value);
    pperc *= 60
    pidoszal = setInterval(pluszido, 1000);
    startGombPlusz.disabled = true;
    stopGombPlusz.disabled = false;
}
function stopPlusz() {
    clearInterval(pidoszal);
    startGombPlusz.disabled = false;
    stopGombPlusz.disabled = true; 
}
