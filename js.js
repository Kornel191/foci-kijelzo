let ido = 60 * 10;
let idoszal;
let startGomb = document.getElementById("start");
let stopGomb = document.getElementById("stop"); 
let pluszidoszal;
let startGombPlusz = document.getElementById("startplusz");
let stopGombPlusz = document.getElementById("stopplusz"); 
stopGomb.disabled = true;   

function nevek() {
    let csapat1 = document.getElementById("csapat1").value;
    let csapat2 = document.getElementById("csapat2").value;

    if (csapat1 != "" && csapat2 != "")
    {
        document.getElementById("csapat1NevKi").innerHTML = csapat1;
        document.getElementById("csapat2NevKi").innerHTML = csapat2;
    }
}

function idoStart() {
    idoszal = setInterval(idok, 1000);
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
        clearInterval(idok);
        /*hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');*/
    }

    let m = Math.floor(ido / 60);
    let s = ido % 60;
    ora.innerHTML = `${m}:${s}`;
}
/*
function pluszido() 
{
    let plusz = parseInt(document.getElementById("plusszInput").value) * 60;

}*/




let pperc = parseInt(document.getElementById("plusszInput")).value;
let pluszido = pperc * 60;

function idoStartPlussz() {
    if(pperc > 0 )
    {
        pluszidoszal = setInterval(pluszidok, 1000);
        startGombPlusz.disabled = true;
        stopGombPlusz.disabled = false; 
    }
}
function stopPlussz() {
    clearInterval(pluszidoszal);
    startGombPlusz.disabled = false;
    stopGombPlusz.disabled = true; 
}

function pluszidok() {
    
    let pluszora = document.getElementById("plusztimer");
    if(pluszido > 0)
    {
        pluszido--;
    }
    else 
    {
        clearInterval(pluszidok);
        /*hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');*/
    }

    let pluszm = Math.floor(ido / 60);
    let pluszs = ido % 60;
    pluszora.innerHTML = `${pluszm}:${pluszs}`;
}






//hozzaadasButton.addEventListener('click', pluszido);





