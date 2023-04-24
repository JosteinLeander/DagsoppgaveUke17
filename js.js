

document.getElementById('regNavn').onclick = function() {registrerNavn()};

function registrerNavn() {
    let navn = document.getElementById("navn").value;
    document.getElementById("velkommen").innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + navn + "!";

    localStorage.setItem(navn, navn);
    let len = localStorage.length;
    console.log(len);
    let navnene = "";
    for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        navnene += "<li>" + localStorage[key] + "</li>";
    }
    
    
    document.getElementById("navnene").innerHTML = navnene;
}




