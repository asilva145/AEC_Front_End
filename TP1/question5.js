
var mainouverte;
var mainfermee;
var mainagrippe;
var angle;

angle = (prompt("Entrez l'angle du robot: "));


    if(angle>= 0 && angle <= 39){
        document.write("mainfermee");
    }
    else if(angle>= 40 && angle <= 89){
        document.write("mainagrippe");
    }
    else if(angle>= 90 && angle <= 180){
        document.write("mainouverte");
    }
    else{
        document.write("Le robot est hors de controle");
    }
