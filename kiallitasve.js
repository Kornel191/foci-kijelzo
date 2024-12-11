let listave = []
let idoszalve = setInterval(tickve,1000)

function Idokezelesve()
{
    let neve = document.getElementById("nevve").value
    let ido = parseInt(document.getElementById("idove").value)

    listave.push({nevek:neve, time:ido})
    console.log(listave)

    kiirasve()
}

function kiirasve()
{
    let main = document.getElementById("felsorve")

    main.innerHTML=""

    listave.forEach(element => {
        main.innerHTML += `<li>${element.nevek} - ${element.time}</li>`
    });
}

function tickve()
{
    for (let i = 0; i < listave.length; i++) 
    {
        listave[i].time -=1

        if(listave[i].time == 0)
        {
            listave.splice(i,1)
        }
    }
    kiirasve()
}
