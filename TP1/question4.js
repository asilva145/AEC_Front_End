var a;
var b;
var c;
var reponse = "";

if(a === b){
    reponse+= "1 ";
    if(b <= (a+c)){
        reponse+="2 ";
    }
    else if((a+b) < c){
        reponse+="3 ";
    }
    else{
        reponse+="4 ";
    }
}
else{
    reponse+="5 ";
}
if(a === b && b === a){
    reponse+="6 ";
}
else{
    reponse+="7 ";
}
alert(reponse);
