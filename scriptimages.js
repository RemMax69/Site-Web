var index = 0;

var images = [
    "images/bracelet or.jpg",
    "images/corde.jpg",
    "images/pierrebleue.jpg",
    "images/pierre violet.jpg",
    "images/key.jpg",
    "images/bracelet argent.jpg",

]

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
    if (select.value="or") {
        document.getElementById("image").src = "images/bracelet or.jpg"
    }
    if (select.value="argent") {
        
        document.getElementById("image").src = "images/bracelet argent.jpg"
      
    } 
    
    else{
        document.getElementById("image").src = "images/corde.jpg"
    }
    

}