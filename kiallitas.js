let lista = []
let idoszalha = setInterval(tick,1000)

function Idokezeles()
{
    let neve = document.getElementById("nev").value
    let ido = parseInt(document.getElementById("ido").value) * 60

    lista.push({nevek:neve, time:ido})
    console.log(lista)

    kiiras()
}

function kiiras()
{
    let main = document.getElementById("felsor")

    main.innerHTML=""

    lista.forEach(element => {
        main.innerHTML += `<li>${element.nevek} - ${element.time}</li>`
    });
}

function tick()
{
    for (let i = 0; i < lista.length; i++) 
    {
        lista[i].time -=1

        if(lista[i].time == 0)
        {
            lista.splice(i,1)
        }
    }
    kiiras()
}
