
let spaceship = {
  velocity: 0,
  speedUp: function(acceleration) {
      this.velocity += acceleration
  }
}

function registerSpaceship() {
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.type = prompt("Informe o tipo da nave")
  spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}

function acelerate() {
  let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
  spaceship.speedUp(acceleration)
  if(spaceship.velocity > spaceship.maxVelocity) {
      alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
              "\nVelocidade da Nave: " + spaceship.velocity + "km/s" + 
              "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
  }
}

function stop() {
  alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " 
          + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
  spaceship.velocity = 0
}

function showMenu() {
  let chosenOption
  do {
      chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
      switch(chosenOption) {
          case "1":
              acelerate()
              break
          case "2":
              stop()
              break
          default:
              alert("Opação inválida")
      }
  } while(chosenOption != "2")
}

registerSpaceship()
showMenu()


/*
function showMenu(){  //Esta função retorna "1" && "2" //
  let option
  while (option != "1" && option != "2") {
    option = prompt("Oque deseja fazer?\n" +
                    "1-Acelerar\n" +
                    "2-Parar")
    
  }
  return option
}

function speedCheck(){ //Retorna True || False //
  if(spaceship.spaceshipVelocity >= spaceship.maxVelocity){
    return true;
  } return false;
}

function speedUp(velocity){
  let newVelocity
   if(!speedCheck()) {
     newVelocity = prompt("Quantos km/s deseja acelerar?")
   spaceship.spaceshipVelocity += parseInt(newVelocity)
   } 
   if(speedCheck()) {
     alert("Você esta a: "+ spaceship.spaceshipVelocity + "\nVelocidade maximap permitida: " + spaceship.maxVelocity)
     dataPrint(spaceship.name, spaceship.type, spaceship.spaceshipVelocity);
     return;
   }
   
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
    case "3":
      break
  }
} while (chooseOption == true);
*/