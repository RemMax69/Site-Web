class new_header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "<h1 class='h1' > Accueil</h1>"+
        "<section class='menu'>"+
            "<a class='nav' href='Page_accueil.html'>Accueil</a>"+
            "<a class='nav' href='contact.html'>Contact</a>"+
            "<a class='nav' href='formulaire.html'>Panier</a>"+
            "<input class='search' type='search' placeholder='chercher un produit'>"+
        "</section>"
    }
}

customElements.define('new-header',new_header);

class new_footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "<footer>"+
        "<h1 class='h1'>Réseaux Sociaux</h1></br>"+
        "<section class='footer'>"+
            "<section class='footer1'>"+
                "<a  href='Page_accueil.html'>Accueil</a>"+
                "<a  href='contact.html'>Contact</a>"+
                "<a  href='formulaire.html'>Panier</a>"+
            "</section>"+
            "<section class='footer2'>"+
                "<a class='logo' href='#'><i class='fab fa-facebook'></i></a>"+
                "<a class='logo' href='#'><i class='fab fa-instagram'></i></a>"+
                "<a class='logo' href='#'><i class='fab fa-twitter'></i></a>"+
            "</section>"+
        "</section>"+
            "<p class='Bijouterie'>Bijouterie de Pernelle et Maximilien </p>"+
    "</footer>"
    }
}
customElements.define('new-footer',new_footer)

var nav =[
    "Page_accueil.html",
    "contact.html",
    "panier.html",
]

function search(select){
    if (select.value = "accueil"){
        document.getElementById("nav").src = "Page_accueil.html"
    }
    if (select.value = "personalisation"){
        document.getElementById("nav").src = "Personnalisation.html"
    }
    if (select.value = "contact"){
        document.getElementById("nav").src = "contact.html"
    }
    if (select.value = "panier"){
        document.getElementById("nav").src = "panier.html"
    }
}
