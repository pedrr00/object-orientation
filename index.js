
let spaceship = {
  name: prompt("nome da nave:"),
  type: prompt("tipo da nave:"),
  maxVelocity: prompt("velocidade maxima permitida em km/s:"),
  spaceshipVelocity: 0
}

function showMenu(){
  let option
  while (option != "1" && option != "2") {
    option = prompt("Oque deseja fazer?\n" +
                    "1-Acelerar\n" +
                    "2-Parar")
  }
  return option
}

function speedUp(velocity){
   let newVelocity
    
    newVelocity = prompt("Quantos km/s deseja acelerar?")
    spaceship.spaceshipVelocity = newVelocity
}

function speedCheck(){
  let verification
  while (verification >= spaceship.maxVelocity){
    alert("Você esta a: "+ spaceship.spaceshipVelocity + "\nVelocidade maximap permitida: " + spaceship.maxVelocity)
  }
  return verification
}

function dataPrint(name, type, velocity){
  alert("Nave: " + spaceship.name + "\ntipo: " + spaceship.type + "\nUltima velocidade Resigtrada: " + spaceship.spaceshipVelocity + " km/s")
}

do{
  chooseOption = showMenu()
  switch(chooseOption){
    case "1":
      speedUp()
      break
    case "2":
      dataPrint(spaceship.name, spaceship.type, spaceship.spaceshipVelocity)
      break
    case "4":
      break
  }
} while (chooseOption == true);
