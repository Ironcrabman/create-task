let i = 0
let armor = 0
let health = 0
let sneak = 0
let attack = 0


function choices(which) {
let description = document.getElementById('descrip')
let buttonA = document.getElementById('A')
let buttonB = document.getElementById('B')

  if (which == 1){
    if (i == 0){
      ///Jariah's base stats
      health +=
      description.innerHTML = "Before you set off on your journey you stop in the local town to gather supplies"
      buttonA.innerHTML = "You use ingriendients from the market to craft potions of invisibility"
      buttonB.innerHTML = "You visit the armor smith and get a Mythril Chestplate"
    }

   if (i == 1){
      sneak += 5
      console.log(sneak)
      description.innerHTML = "The next morning you set off for the tower but it is surronded by a moat"
      buttonA.innerHTML = ""
      buttonB.innerHTML = ""
   }
  }else if (which == 2){
    if (i == 0){
      ///Vincent's base stats
      description.innerHTML = "Placeholder"
      buttonA.innerHTML ="Placeholder"
      buttonB.innerHTML ="Placeholder"
    }

    if (i == 1){
      armor += 4
      console.log(armor)
      description.innerHTML = "The next morning you set off for the tower but it is surronded by a moat"
      buttonA.innerHTML = ""
      buttonB.innerHTML = ""
    }


  }

i++
}
