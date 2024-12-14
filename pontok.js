let minus1Gomb = document.getElementById("cs1minuspont")
let minus2Gomb = document.getElementById("cs2minuspont")
let pont1 = 0
let pont2 = 0
let cs2Pont = document.getElementById("csapat2pont")
let cs1Pont = document.getElementById("csapat1pont")


function pontok1plusz()
{
    pont1++;
    cs1Pont.innerHTML = pont1
    if (pont1 > 0)
        minus1Gomb.disabled = false
}


function pontok1minus()
{
    pont1--;

    if (pont1 == 0)
    {
        minus1Gomb.disabled = true
    }
    let cs1Pont = document.getElementById("csapat1pont")
    cs1Pont.innerHTML = pont1

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
    pont2--;
    if (pont2 == 0)
    {
        minus2Gomb.disabled = true
    }
    let cs2Pont = document.getElementById("csapat2pont")
    cs2Pont.innerHTML = pont2

}