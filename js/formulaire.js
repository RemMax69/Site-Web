var articlesTexte = localStorage.getItem("articles")
var articles = JSON.parse(articlesTexte)
var produitchoisie = localStorage.getItem("produitchoisie")
var choisie = JSON.parse(produitchoisie)
console.log("articles")

var prixtotal = localStorage.getItem("prix")
var prix = JSON.parse(prixtotal)

document.getElementById("prix").innerText = prix
document.getElementById("produitchoisie").src = choisie[choisie.length-1]