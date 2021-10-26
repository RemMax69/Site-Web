var articlesTexte = localStorage.getItem("articles")
var articles = JSON.parse(articlesTexte)
var produitchoisie = localStorage.getItem("produitchoisie")
var choisie = JSON.parse(produitchoisie)
var nbproduit = localStorage.getItem("nbproduit")
var nb = JSON.parse(nbproduit)

var prixtotal = localStorage.getItem("prix")
var prix = JSON.parse(prixtotal)

document.getElementById("prix").innerText = prix
document.getElementById("produitchoisie1").src = choisie[choisie.length-1].image1
document.getElementById("produitchoisie2").src = choisie[choisie.length-1].image2
document.getElementById("nbproduit").innerText = nb