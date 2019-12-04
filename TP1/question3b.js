
var attaque1;
var attaque2;

attaque1 = (prompt("Entrez l'attaque1: "));
attaque2 = (prompt("Entrez l'attaque2: "));

if (attaque1 === "rogne" &&  attaque2 === "eclair"){
    Pokemon = "Pikachu";
    document.write("pikachu")

}
else if (attaque1 === "rogne"||  attaque2 === "eclair"){
    Pokemon ="Raichu";
    document.write("raichu")
}
else{
    Pokemon = "Salamèche";
    document.write("salameche")
}