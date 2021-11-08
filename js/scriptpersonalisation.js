class Produit {
    constructor(nom, images, titre, pierre, prixbase = 10, suplement) {
        this.nom = nom;
        this.images = images;
        this.titre = titre;
        this.pierre = pierre;
        this.prixbase = prixbase;
        this.suplement = suplement;
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
    silicone: new Produit('Silicone',
    ["images/violet.jpg",
    "images/blanc.jpg",
    "images/vert.jpeg" ]
    ),

    bague: new Produit('bague', 
        ["images/Bague.jpeg",
        "images/baguebleu.jpg",
        "images/bagueor.jpg",
        "images/bagueviolet.jpg"
    ],"Monture",
    "Pierre"
    )
};


let id = new URLSearchParams(window.location.search).get("id");

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
    /* document.getElementById("champChaineBracelet").disabled = true; */
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
var prix = produits[id].prixbase 
var prixtotal = 0
var produitchoisie = []
var imagechoisie1 = "#";
var imagechoisie2 = "#";
var currentProduit = "";
function changement(select){
    if (id === "bracelet"){
        currentProduit = select.value;
        if (select.value=="or"){
            document.getElementById("image").src = "images/bracelet or.jpg";
            produits[id].suplement = 5
            imagechoisie1 = "images/bracelet or.jpg"
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = "images/bracelet argent.jpg";
            produits[id].suplement = 3
            imagechoisie1 = "images/bracelet argent.jpg"
        } 
        else if (select.value=="corde"){
            document.getElementById("image").src = "images/corde.jpg";
            produits[id].suplement = 1
            imagechoisie1 = "images/corde.jpg"

        }
        else if (select.value=="pierre bleu"){
            document.getElementById("image").src = "images/pierrebleue.jpg"
            imagechoisie2 = "images/pierrebleue.jpg"
        }
        else if (select.value=="pierre violet"){
            document.getElementById("image").src = "images/pierrebleue.jpg"
            imagechoisie2 = "images/pierrebleue.jpg"
        }
        else if (select.value=="key"){
            document.getElementById("image").src = "images/key.jpg"
            produitchoisie.push("images/key.jpg")
            imagechoisie2 = "images/key.jpg"
        }
    }else if (id ==="collier"){
        if (select.value=="or"){
            document.getElementById("image").src = 'images/collier or.jpg';
            produits[id].suplement = 5
            produitchoisie.push('images/collier or.jpg')
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = 'images/collier argent.jpg';
            produits[id].suplement = 1
            produitchoisie.push('images/collier argent.jpg')
        }
        else if (select.value=="coeur"){
            document.getElementById("image").src = 'images/coeur.jpg'
            produitchoisie.push('images/coeur.jpg')
        }
        else if (select.value=="globe"){
            document.getElementById("image").src = 'images/globe.jpeg'
            produitchoisie.push('images/globe.jpeg')
        }
        else if (select.value=="cheval"){
            document.getElementById("image").src = 'images/horse.jpg'
            produitchoisie.push('images/horse.jpg')
        }
        else if (select.value=="rond"){
            document.getElementById("image").src = 'images/rond.jpg'
            produitchoisie.push('images/rond.jpg')
        }
    }else if (id==="bague"){
        if (select.value=="or"){
            document.getElementById("image").src = 'images/bagueor.jpg'
            produitchoisie.push('images/bagueor.jpg')
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = "images/Bague.jpeg"
            produits[id].suplement = 5
            produitchoisie.push("images/Bague.jpeg")
        }
        else if (select.value=="argent"){
            document.getElementById("image").src = "Bague.jpeg";
            produits[id].suplement = 3
            produitchoisie.push("Bague.jpeg")
        }
        else if (select.value=="pierre bleu"){
            document.getElementById("image").src = 'images/baguebleu.jpg'
            produitchoisie.push('images/baguebleu.jpg')
        }
        else if (select.value=="pierre violet"){
            document.getElementById("image").src = 'images/bagueviolet.jpg'
            produitchoisie.push('images/bagueviolet.jpg')
        }
    }else if (id ==="silicone"){
        if (select.value=="vert"){
            document.getElementById("image").src = "images/vert.jpeg"
            produitchoisie.push("images/vert.jpeg")
        }
        else if (select.value=="blanc"){
            document.getElementById("image").src = "images/blanc.jpg"
            produitchoisie.push("images/vert.jpeg")
        }
        else if (select.value=="violet"){
            document.getElementById("image").src = "images/violet.jpg"
            produitchoisie.push("images/violet.jpg")
        }
    }

}
var nbproduit = 0

var articles = []

var nbArticles = 0
var listeArticles = {"or":0, "argent":0, "corde":0}

function arrayHandler(isAdd, idButton){
    
    if (idButton == "or"){
        listeArticles[idButton] = (isAdd*parseInt(nbArticles)) + parseInt(listeArticles[idButton]);
        }
    else if (idButton  == "argent"){
        listeArticles[idButton] = (isAdd*parseInt(nbArticles)) + parseInt(listeArticles[idButton]);
        }
    else if (currentProduit == "corde"){
        listeArticles[idButton] = (isAdd*parseInt(nbArticles) )+ parseInt(listeArticles[idButton]);
        }
    
    tabBody = document.getElementById("tableauArticle")  
    document.getElementById("tableauArticle").innerText=""
    for (const [key, value] of Object.entries(listeArticles)) {
        row=document.createElement("tr");
        cell1 = document.createElement("td");
        cell2 = document.createElement("td");
        button = document.createElement("button");
        button.setAttribute("id", key);
        textnode1=document.createTextNode(key);
        textnode2=document.createTextNode(value);
        textnode3=document.createTextNode("Suprimer");
        cell1.appendChild(textnode1);
        cell2.appendChild(textnode2);
        button.appendChild(textnode3);
        button.onclick = function() {
            panniersupr(this.id);
        };
/*         document.getElementById("button").addEventListener('click',function (){panniersupr()}); */
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(button);
 /*        button.onclick = panniersupr() */
        tabBody.appendChild(row);
    }

}
function pannieradd(){
    
    console.log(produitchoisie)
    
    produitchoisie.push({produit: produits[id], image1: imagechoisie1, image2: imagechoisie2})

    nbArticles = document.getElementById("nbArticles").value
    prixtotal = prixtotal + ((prix + produits[id].suplement)*nbArticles)
    document.getElementById("prix").innerText = prixtotal

    nbproduit = nbproduit + parseInt(nbArticles, 10)
    document.getElementById("nbproduit").innerText = nbproduit 

    
    arrayHandler(1,currentProduit);
    localStorage.setItem("prix", JSON.stringify(prixtotal))
    localStorage.setItem("produitchoisie", JSON.stringify(produitchoisie))
    localStorage.setItem("nbproduit", JSON.stringify(nbproduit))
}
console.log(listeArticles)
function panniersupr(idButton){

    
    if (nbproduit > 0){
        
        nbproduit = nbproduit -  nbArticles
        
        const produitsuppr = produitchoisie.pop(produitchoisie.length-1)
        prixtotal = prixtotal - ((produitsuppr.produit.prixbase + produitsuppr.produit.suplement)*nbArticles)
        localStorage.setItem("prix", JSON.stringify(prixtotal))
        localStorage.setItem("produitchoisie", JSON.stringify(produitchoisie))
        localStorage.setItem("nbproduit", JSON.stringify(nbproduit))

        document.getElementById("prix").innerText = prixtotal
        document.getElementById("nbproduit").innerText = nbproduit 
    }
    else{
    }

    if (parseInt(nbproduit, 10) >0 ){
        console.log(nbproduit)
        arrayHandler(-1,idButton);
    }
    
}