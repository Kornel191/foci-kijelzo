/*let csapat1 = document.getElementById("csapat1").value;
let csapat2 = document.getElementById("csapat2").value;

if (csapat1 != "" && csapat2 != "")
{
    document.getElementById("csapat1NevKi").innerHTML = csapat1;
    document.getElementById("csapat2NevKi").innerHTML = csapat2;
}*/

let ido = 60 * 10;
let idoszal = setInterval(idok, 1000);

function idok() {
    let ora = document.getElementById("timer");
    if(ido > 0)
    {
        ido--;
    }
    else 
    {
        clearInterval(idok);
        hozzaadasContainer.style.display = 'block'; 
    }

    let m = Math.floor(ido / 60);
    let s = ido % 60;
    ora.innerHTML = `${m}:${s}`;
}
function pluszido() {
    let plusz = parseInt(document.getElementById().value) *60;

}




