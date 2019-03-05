let i = 0
let health = 0
let stealth = 0
let attack = 0
let name
let special = false
let check

function choices(which) {
let description = document.getElementById('descrip')
let buttonA = document.getElementById('A')
let buttonB = document.getElementById('B')
let image = document.getElementById('pic')

  if (which == 1){
    if (i == 0){
      ///Jariah's base stats
      name = 'Jariah'
      health = 50
      stealth = 10
      attack = 3
      description.innerHTML = 'Before you set off on your journey you stop in the local town to gather supplies'
      buttonA.innerHTML = 'You use ingriendients from the market to craft potions of invisibility'
      buttonB.innerHTML = 'You visit the armor smith and get a Mythril Chestplate'
    }

   if (i == 1){
      stealth += 5
      console.log(stealth)
      image.src = "images/crocs.png"
      description.innerHTML = 'The next morning you set off for the tower but it is surronded by a moat'
      buttonA.innerHTML = 'A: You choose to make a boat to sail across the moat'
      buttonB.innerHTML = 'B: You choose to swim through the moat unsure if their are any animals inside'
   }

   if (i == 2) {
     eventgen();
     if(special == true){
       description.innerHTML = 'An alligator is attacking your boat!'
       buttonA.innerHTML = 'A: You wack it in the head with your staff'
       buttonB.innerHTML = 'B: You try and use a calm spell on it'
       buttonB.onclick = check = 'magic'
     } else {
       i = 4
     }
   }

   if(i==3){
     if (attack > 5){
       description.innerHTML = 'The alligator leaves you boat alone and sinks back into the water'
       buttonA.innerHTML = 'A: You tie up the boat and head inside'
       buttonB.innerHTML = 'B: You let the boat float away and head inside the tower'
     } else {
       description.innerHTML = 'The alligator bites at your staff causing you to fall over but then leaves you alone'
       buttonA.innerHTML = 'A: You tie up the boat and head inside'
       buttonB.innerHTML = 'B: You let the boat float away and head inside the tower'
     }
   }

   if(i==4){

   }
  }else if (which == 2){
    if (i == 0){
      ///Vincent's base stats
      name = 'Vincent'
      health = 50
      stealth = 3
      attack = 10
      description.innerHTML = 'Before you set off on your journey you stop in the local town to gather supplies'
      buttonA.innerHTML = 'You use ingriendients from the market to craft potions of invisibility'
      buttonB.innerHTML = 'You visit the armor smith and get a Mythril Chestplate'
    }

    if (i == 1){
      health += 5
      console.log(health)
      description.innerHTML = 'The next morning you set off for the tower but it is surronded by a moat'
      buttonA.innerHTML = 'A: You choose to make a boat to sail across the moat'
      buttonB.innerHTML = 'B: You choose to swim through the moat unsure if their are any animals inside'
    }

    if (i == 2) {
      eventgen();
      if(special = true){
        description.innerHTML = 'An alligator is approching you!'
        buttonA.innerHTML = 'A: You wack it in the head with your staff'
        buttonB.innerHTML = 'B: You try and sneak by it'
        buttonB.onclick = check = 'stealth'
        console.log(check)
      } else {
        i=4
      }
    }

    if (i == 3) {
      if (check = "magic"){
      check = Math.floor(math.random)  
      }else{

      }
    }

  }

i++
}

function eventgen() {
  special = Math.floor((Math.random() * 10) + 1);
  if(special > 6){
    special = true
  }else {
    special = false
  }
}
