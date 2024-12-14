let ido = 0;
let idoszal;
let startGomb = document.getElementById("start");
let stopGomb = document.getElementById("stop"); 
let pluszidoszal;
let pluszidoGomb = document.getElementById("pluszido"); 
let felido = document.getElementById("ujra");
let pidoszal;
let startGombPlusz = document.getElementById("startP");
let stopGombPlusz = document.getElementById("stopP");
stopGomb.disabled = true;
let pperc = 0;
let szamol = 0;

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
    if(ido < (60*20))
    {
        ido++;
        szamol++
    }
    else 
    {
        clearInterval(idoszal);
        //hozzaadasContainer.style.display = 'block';
        felido.disabled = false;


    }

    let m = Math.floor(ido / 60);
    let s = ido % 60;
    ora.innerHTML = `${m}:${s}`;


    if ( szamol == 2*(60*20))
        {
            hosszkezdGomb.disabled = false;
            stopGombPlusz.disabled = false;
            felido.disabled = true;
            if(pont1 > pont2)
                alert("A(z)" + nev1 + "csapat nyert " + pont1 + " góllal.")
            else if(pont1 < pont2)
                alert("A(z)" + nev2 + "csapat nyert " + pont2 + " góllal.")
            else 
                alert("Jelemleg az állás döntetlen. Mindkét csapat " + pont1 + " gólt rúgott. A hosszabítás ezen még váltotathat.")

        }

}

function ujra()
{
    ido = 0;
    idoszal = setInterval(idok, 10);
    startGomb.disabled = true;
    stopGomb.disabled = false;
    felido.disabled = true;
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
        //alert('Lejárt az idő!');
        if(pont1 > pont2)
            alert("A(z)" + nev1 + "csapat nyert " + pont1 + " góllal.")
        else if(pont1 < pont2)
            alert("A(z)" + nev2 + "csapat nyert " + pont2 + " góllal.")
        else 
            alert("Döntetlen. Mindkét csapat " + pont1 + " gólt rúgott.")
    }

    let pm = Math.floor(pperc / 60);
    let ps = pperc % 60;
    pluszora.innerHTML = `${pm}:${ps}`;
}

let hosszkezdGomb = document.getElementById("hosszkezdes")

function hosszkezd()
{
    pperc = parseInt(document.getElementById("plusszInput").value);
    pperc *= 60
    pidoszal = setInterval(pluszido, 1000);
    startGombPlusz.disabled = true;
    stopGombPlusz.disabled = false;
    hosszkezdGomb.disabled = true
}

function idoStartPlusz() {

    pidoszal = setInterval(pluszido, 1000);
    startGombPlusz.disabled = true;
    stopGombPlusz.disabled = false;
}
function stopPlusz() {
    clearInterval(pidoszal);
    startGombPlusz.disabled = false;
    stopGombPlusz.disabled = true; 
}

