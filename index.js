function showMenu(){
  let option
  while (option != "1" && option != "2") {
    option = prompt("Oque deseja fazer?\n" +
                    "1-Acelerar\n" +
                    "2-Parar")
  }
  return option
}

showMenu()

let spaceship = {
  name: prompt("Qual nome da nave?"),
  type: prompt("Qual tipo da nave?"),
  maxVelocity: prompt("Velocidade maxima:"),
  velocity: 0
}

