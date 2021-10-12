class Produit {
    constructor(nom, src) {
        this.nom = nom;
        this.src = src;
    }
}

produits = {
    bracelet: new Produit('bracelet', [
        "images/bracelet or.jpg",
        "images/corde.jpg",
        "images/pierrebleue.jpg",
        "images/pierre violet.jpg",
        "images/key.jpg",
        "images/bracelet argent.jpg"
    ]),
    collier: new Produit('collier', ['images/bracelet or.jpg']),
    silicone: new Produit('silicone', ['images/bracelet or.jpg']),
    bague: new Produit('bague', ['images/bracelet or.jpg']),
};


let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

prod = produits[id];
console.log(prod);
prod.nom

 if (id === "bracelet") {
     document.getElementById("choixcollier").style.display = "none";
 }


if (id == "collier") {
    document.getElementById("choixbracelet").style.display = "none";
}