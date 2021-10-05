var index = 0;
var images = [
    "images/bracelet or.jpg",
    "images/corde.jpg"
]

function precedent() {
    console.log("on a cliqué sur precedent")
}

function suivant() {
    console.log("on a cliqué sur suivant")
    index = (index + 1) % images.length;
    console.log(images[index])
    document.getElementById("image").src = images[index]
}