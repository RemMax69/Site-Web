class new_header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "<h1 class='h1' > Accueil</h1>"+
        "<section class='menu'>"+
            "<a class='nav' href='Page_accueil.html'>Acceuil</a>"+
            "<a class='nav' href='Personnalisation.html'>Personnalisation</a>"+
            "<a class='nav' href='contact.html'>Contact</a>"+
            "<a class='nav' href='panier.html'>panier</a>"+
            "<input class='search' type='search' placeholder='chercher un produit'>"+
        "</section>"
    }
}

customElements.define('new-header',new_header);

class new_footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "<footer>"+
        "<h1 class='h1'>Réseau Sociaux</h1></br>"+
        "<section class='footer'>"+
            "<section class='footer1'>"+
                "<a  href='Page_accueil.html'>Acceuil</a>"+
                "<a  href='Personnalisation.html'>Personnalisation</a>"+
                "<a  href='contact.html'>Contact</a>"+
                "<a  href='panier.html'>Panier</a>"+
            "</section>"+
            "<section class='footer2'>"+
                "<a class='logo' href='#'><i class='fab fa-facebook'></i></a>"+
                "<a class='logo' href='#'><i class='fab fa-instagram'></i></a>"+
                "<a class='logo' href='#'><i class='fab fa-twitter'></i></a>"+
            "</section>"+
        "</section>"+
            "<p class='Bijouterie'>Bijouterie de Pernel et Maximilien </p>"+
    "</footer>"
    }
}
customElements.define('new-footer',new_footer)