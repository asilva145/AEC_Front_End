
var pointsdedommages;
var hp;
var adversaire;

//pointsdedommages=Number( prompt("entrez le point de dommages: "));
adversaire=(prompt("Entrez le points de vie(hp) du Pokémon adversaire: "));


if (adversaire<60) {
        pointsdedommages=100;
        document.write("points de dommages=100");
}


  else if (adversaire>60  && adversaire<79) {
        pointsdedommages=150;
        document.write("points de dommages=150");

  }
  else if (adversaire>80 && adversaire<99 ) {
        pointsdedommages=200;
        document.write("points de dommages=200")

  }

  else if (adversaire>100) {
        pointsdedommages=200;
        document.write("points de dommages=200")
  }
  else {
        document.write("no dommages ")
}