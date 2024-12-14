function atiras()
{
    localStorage.setItem("nev1",document.getElementById("csapat1").value)
    localStorage.setItem("nev2",document.getElementById("csapat2").value)
}


const ki1 = localStorage.getItem("nev1")
const ki2 = localStorage.getItem("nev2")
document.getElementById("csapat1NevKi").innerHTML = ki1;
document.getElementById("csapat2NevKi").innerHTML = ki2;

