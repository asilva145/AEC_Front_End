var RaspBerry;
var moteur;
var camerausb;
var led;


var prixrasp;
var prixmoteur;
var prixcamera;
var prixled;
var total;



RaspBerry = prompt("Entrez le controleur: raspberrypi ou raspberrizero:");
moteur = Number("Entrez le nombre de moteur entre 2 et 24: ");
camerausb = Number("Entrez si vous voulez une camera  2 : ");
led =Number("Entrez si vous voulez une led 1 : ");

if(RaspBerry === "RaspberryPi"){
    prixrasp = 55;

}
else if(RaspBerry === "RaspberryZero"){
    prixrasp = 15;
}
else  if
(moteur > 2 && moteur < 24){
    prixmoteur =moteur *5;

}
else if(camerausb === 2){
    prixcamera= 10 ;
}
else if(led === 1){
    prixled =15;

}


else{

    prixcamera=0;
    prixmoteur=0;
    prixled =0;

}

    total= prixrasp + moteur + prixcamera + prixled + 20 + 15  *0.15;

