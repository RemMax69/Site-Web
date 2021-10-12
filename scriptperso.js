class Produit {
    constructor(nom, src) {
        this.nom = nom;
        this.src = src;
    }
}

produits = {
    bracelet: new Produit('bracelet', ['images/bracelet or.jpg']),
    collier: new Produit('bracelet', ['images/bracelet or.jpg']),
};


let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

prod = produits[id];
console.log(prod);
//prod.nom

 if (id === "bracelet") {
     document.getElementById("choixcollier").style.display = "none";
 }


if (id == "collier") {
    document.getElementById("choixbracelet").style.display = "none";
}