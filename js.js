

document.getElementById('regNavn').onclick = function() {registrerNavn()};

function registrerNavn() {
    let navn = document.getElementById("navn").value;
    document.getElementById("velkommen").innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + navn + "!";

    localStorage.setItem()
    let navnene = "";
    navnene += "<li>" + navn + "</li>";
    
    document.getElementById("navnene").innerHTML = navnene;
}




