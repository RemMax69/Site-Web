var articlesTexte = localStorage.getItem("articles")
console.log(articlesTexte)

var articles = JSON.parse(articlesTexte)
console.log(articles)

var prixtotal = localStorage.getItem("prix")
var prix = JSON.parse(prixtotal)
console.log("prix")
document.getElementById("prix").innerText = prix