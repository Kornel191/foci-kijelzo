let ido = 60 * 10;
let idoszal;
let startGomb = document.getElementById("start");
let stopGomb = document.getElementById("stop"); 
let pluszidoszal;
let pluszidoGomb = document.getElementById("pluszido"); 
let pont1 = 0
let pont2 = 0
let cs2Pont = document.getElementById("csapat2pont")
let cs1Pont = document.getElementById("csapat1pont")
let minus1Gomb = document.getElementById("cs1minuspont")
let minus2Gomb = document.getElementById("cs2minuspont")
let pidoszal;
let startGombPlusz = document.getElementById("startP");
let stopGombPlusz = document.getElementById("stopP");
stopGomb.disabled = true;

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
        hozzaadasContainer.style.display = 'block'; 
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

function plusido()
{
    let perc = parseInt(document.getElementById("plusszInput").value);
    ido+= (perc*60)
    pluszidoGomb.disabled = true
    perc.disabled = true
}



function pontok1plusz()
{
    pont1++;
    cs1Pont.innerHTML = pont1
    if (pont1 > 0)
        minus1Gomb.disabled = false
}


function pontok1minus()
{
    if (pont1 == 0)
    {
        minus1Gomb.disabled = true
    }
    else
    {
        pont1--;
        let cs1Pont = document.getElementById("csapat1pont")
        cs1Pont.innerHTML = pont1
    }

}


function pontok2plusz()
{
    pont2++;
    cs2Pont.innerHTML = pont2
    if (pont2 > 0)
        minus2Gomb.disabled = false
    
}


function pontok2minus()
{
    if (pont2 == 0 )
    {
        minus2Gomb.disabled = true
    }
    else
    {
        pont2--;
        let cs2Pont = document.getElementById("csapat2pont")
        cs2Pont.innerHTML = pont2
    }

}


function pluszido()
{
    let pperc = parseInt(document.getElementById("plusszInput").value) * 60;
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

function idoStart() {
    pidoszalidoszal = setInterval(pluszido, 1000);
    startGombPlusz.disabled = true;
    stopGombPlusz.disabled = false;
}
function stop() {
    clearInterval(pidoszal);
    startGombPlusz.disabled = false;
    stopGombPlusz.disabled = true; 
}


/*
let pidoszal;


function pluszidoszal()
{
    if(ido ==0)
    {
        let pluszora = document.getElementById("plusztimer");
        if(pperc > 0)
        {
            pperc--;
        }
        else 
        {
            clearInterval(pidoszal);
    
        }
    
        let pm = Math.floor(pperc / 60);
        let ps = pperc % 60;
        pluszora.innerHTML = `${pm}:${ps}`;
    }


}
*/

        /*hozzaadasContainer.style.display = 'block'; 
        alert('Lejárt az idő!');*/








/*
function pluszido() 
{
    let plusz = parseInt(document.getElementById("plusszInput").value) * 60;

}*/



//hozzaadasButton.addEventListener('click', pluszido);


