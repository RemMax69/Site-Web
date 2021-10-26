function filtrer(select){
    let isBracelets = (select.value=="bracelets");
    let isColliers = (select.value=="colliers");
    let isBagues = (select.value=="bagues");
    let tout = (select.value == "tout");

    document.getElementById("number1").style.display = isBracelets ? "block" : "none"; 
    document.getElementById("number3").style.display = isBracelets ? "block" : "none";
    document.getElementById("number2").style.display = isColliers ? "block" : "none";
    document.getElementById("number4").style.display = isBagues ? "block" : "none";
    
 if (select.value=="tout"){
     document.getElementById("number1").style.display = "block";
     document.getElementById("number2").style.display = "block";
     document.getElementById("number3").style.display = "block";
     document.getElementById("number4").style.display = "block";
 }

   
}
