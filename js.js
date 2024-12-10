let ido = 60 * 10;
let idoszal;
let startGomb = document.getElementById("start");
let stopGomb = document.getElementById("stop"); 
let pluszidoszal;
let pluszidoGomb = document.getElementById("pluszido"); 
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



function plusido()
{
    let pperc = parseInt(document.getElementById("plusszInput").value);
    ido+= (pperc*60)
    pluszidoGomb.disabled = true
    pperc.disabled = true
}


let pont1 = 0
let pont2 = 0

let cs2Pont = parseInt(document.getElementById("csapat2pont").value)
let cs1Pont = document.getElementById("csapat1pont")

function pontok1plusz ()
{
    pont1++;
    cs1Pont.innerHTML = pont1
    
}

function pontok1minus ()
{
    if (pont1 == 0 )
    {

    }
    else
    {
        pont1--;
        let cs1Pont = document.getElementById("csapat1pont")
        cs1Pont.innerHTML = pont1
    }

}

/*
function pluszido() 
{
    let plusz = parseInt(document.getElementById("plusszInput").value) * 60;

}*/













//hozzaadasButton.addEventListener('click', pluszido);





