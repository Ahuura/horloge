$(document).ready(function(a){
    aiguille()
})



function aiguille(){
    var d = new Date();
    $("#heure").css("transform", "rotate("+30*d.getHours()+"deg)");
    $("#minute").css("transform", "rotate("+6*d.getMinutes()+"deg)");
    $("#seconde").css("transform", "rotate("+6*d.getSeconds()+"deg)");
    setTimeout(aiguille,1000);
}

//fonction pour cacher l'aiguille des secondes
function cacher (){
   
         if( $("#seconde").css("display") == "block"){
             $("#seconde").hide();
         }
         else{
             $("#seconde").show();
         }
    }; 