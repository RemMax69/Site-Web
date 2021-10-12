class Produit {
    constructor(nom, images, titre, pierre) {
        this.nom = nom;
        this.images = images;
        this.titre = titre;
        this.pierre =pierre;
    }
}

produits = {
    bracelet: new Produit('Mon super bracelet', [
        "images/bracelet or.jpg",
        "images/corde.jpg",
        "images/pierrebleue.jpg",
        "images/pierre violet.jpg",
        "images/key.jpg",
        "images/bracelet argent.jpg"
    ],'Chaine du bracelet',
    "Charms"
    ), 
    collier: new Produit('Collier', [
        'images/collier or.jpg',
        'images/Colier.jpeg',
        'images/collier argent.jpg',
        'images/icollier.jpg',
    ],"chaine du collier"
    ),

    silicone: new Produit('silicone',
    ["images/violet.jpg",
    "images/blanc.jpg",
    "images/vert.jpeg" ]
    ),

    bague: new Produit('bague', 
    ["images/Bague.jpeg",

    ],"Monture",
    "Pierre"
    )
};


let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
console.log(produits[id].images)
document.getElementById("titreproduit").innerText = produits[id].nom
document.getElementById("chaine").innerText = produits[id].titre
document.getElementById("charms").innerText = produits[id].pierre;
document.getElementById("image").src = produits[id].images[0]
var index = 0;

var images = produits[id].images

if (id === "bracelet") {
    document.getElementById("pendentif").style.display = "none";
    document.getElementById("couleur").style.display = "none";
}
if (id === "collier"){
    document.getElementById("champChaineBracelet").style.display = "none";
    document.getElementById("charmsbracelet").style.display = "none";
    document.getElementById("couleur").style.display = "none";
}
if (id ==="silicone"){
    document.getElementById("charmsbracelet").style.display ="none";
    document.getElementById("pendentif").style.display ="none";
    document.getElementById("matiere").style.display = "none";
}
if (id ==="bague"){
    document.getElementById("champChaineBracelet").style.display = "none";
    document.getElementById("pendentif").style.display = "none";
    document.getElementById("couleur").style.display = "none";
    document.getElementById("champcharmsbracelet").style.display = "none";

}
function suivant() {
    console.log("on a cliqué sur suivant")
    index = (index + 1) % images.length;
    console.log(images[index])
    document.getElementById("image").src = images[index]
}
function precedent() {
    console.log("on a cliqué sur precedent")
    if (index == 0) {
    index=images.length-1
    }else{
    index = (index-1)% images.length;}
    document.getElementById("image").src = images[index]
}

function changement(select){
    console.log(select.value)
    if (id === "bracelet"){
        if (select.value=="or") {
            document.getElementById("image").src = "images/bracelet or.jpg"
        }
        else if (select.value=="argent") {
            
            document.getElementById("image").src = "images/bracelet argent.jpg"
        } 
        else{
            document.getElementById("image").src = "images/corde.jpg"
        }
    }else if (id ==="collier"){
        if (select.value=="or"){
            document.getElementById("image").src = 'images/collier or.jpg'
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = 'images/collier argent.jpg'
        }
    }else if (id==="bague"){
        if (select.value=="or"){
            document.getElementById("image").src = "#"
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = "#"
        }
    }
}