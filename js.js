//Javascript for å lagre navn i localStorage og viser velkomst melding
//Lister navnene opp på skjerm
//Genererer ett nytt lykketall hvert minutt og viser det på skjerm

document.getElementById('regNavn').onclick = function() {registrerNavn()};
document.getElementById('clearls').onclick = function() {deleteLocalStorage()};

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

runClock = () => {
    let time = new Date();
    let timeToUpdate = (60 - time.getSeconds()) * 1000 - time.getMilliseconds();
    setTimeout(skrivTall, timeToUpdate);
}

skrivTall = () => {
    let random = Math.random();
    const lykketall = Math.round(random * 10);
    document.getElementById("lykketall").innerHTML = lykketall;
    runClock();
}
skrivTall();

deleteLocalStorage = () => {
    localStorage.clear();
}




