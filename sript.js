var ra = Math.random(1, 15)

var re = document.getElementById("form")

function Cli() {

    var name = document.getElementById("enter").value

    while (name == "") {
        name = document.getElementById("na").innerHTML = "Please Enter Your Name Sir"

    }
    name = document.getElementById("na").innerHTML = "Welcome Sir " + name

    var shall = document.getElementById("shall")




    shall.innerHTML = "Shall We Begin Yes / No"
    var ne = document.createElement("input")
    ne.setAttribute("id", "sha")
    ne.setAttribute("placeholder", "Type Yes Or No")
    re.appendChild(ne)


    var entry = document.createElement("input")
    entry.setAttribute("type", "button")
    entry.setAttribute("id", "btn")
    entry.setAttribute("value", "Enter")
    re.appendChild(entry)

    // while (ne != "Yes") {
    //     shall.innerHTML = "Shall We Begin Yes / No"
    //     var ne = document.createElement("input")
    //     ne.setAttribute("id", "sha")
    //     ne.setAttribute("placeholder", "Type Yes Or No")
    //     re.appendChild(ne)
    // }


}