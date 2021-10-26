var articlesTexte = localStorage.getItem("articles")
var articles = JSON.parse(articlesTexte)
var produitchoisie = localStorage.getItem("produitchoisie")
var choisie = JSON.parse(produitchoisie)
console.log("articles", choisie)

var prixtotal = localStorage.getItem("prix")
var prix = JSON.parse(prixtotal)

document.getElementById("prix").innerText = prix
document.getElementById("produitchoisie").src = choisie[choisie.length - 1].image

function adresse(event) {
    let addr = encodeURIComponent(event.target.value);
    console.log(addr);
    fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+addr+'.json?access_token=AIzaSyCfohSBF8EuXri2Vsh6QSsiJzFYJQYAtbM')
    then(function (response) {
        return response.json();
    })
    then(function (adress){
        const objectURL = URL.createObjectURL(adress);
        myadress.src=objectURL;
        fetch('"https://api.mapbox.com/directions/v5/mapbox/driving/45.75525843786705, 4.830161540257744?waypoints=0;2&access_token=AIzaSyCfohSBF8EuXri2Vsh6QSsiJzFYJQYAtbM"')
    });
}

function coche(checkbox){
    if(checkbox.checked){
        prix=prix+8;
        maj();
    } else{
        prix=prix-8;
        maj();
    }

}

function maj(){
    document.getElementById("prix").innerText = prix;
}

