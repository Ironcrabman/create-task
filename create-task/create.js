let i = 0
let health = 0
let stealth = 0
let attack = 0
let name
let special
let check
let combat

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
      image.src = "images/market.png"
      description.innerHTML = 'Before you set off on your journey you stop in the local town to gather supplies'
      buttonA.innerHTML = 'You use ingriendients from the market to craft potions of invisibility'
      buttonB.innerHTML = 'You visit the armor smith and get a Mythril Chestplate'
    }

   if (i == 1){
      stealth += 5
      console.log(stealth)
      image.src = "images/crocs.png"
      description.innerHTML = 'The next morning you set off for the tower but it is surronded by a moat'
      buttonA.innerHTML = 'You choose to make a boat to sail across the moat'
      buttonB.innerHTML = 'You choose to swim through the moat unsure if their are any animals inside'
   }

   if (i == 2) {
     eventgen();
     special;
     console.log(special)
     if(special == true){
       image.src = "images/boatattack.png"
       description.innerHTML = 'An alligator is attacking your boat!'
       buttonA.innerHTML = 'You wack it in the head with your staff'
       buttonB.innerHTML = 'You try and use a calm spell on it'
       buttonB.onclick = check = 'magic'
     } else {
       i = 4
       ////insert first floor
     }
   }

   if(i==3){
     if (attack > 5){
       description.innerHTML = 'The alligator leaves you boat alone and sinks back into the water'
       buttonA.innerHTML = 'You tie up the boat and head inside'
       buttonB.innerHTML = 'B: You let the boat float away and head inside the tower'
     } else {
       description.innerHTML = 'The alligator bites at your staff causing you to fall over but then leaves you alone'
       buttonA.innerHTML = 'You tie up the boat and head inside'
       buttonB.innerHTML = 'You let the boat float away and head inside the tower'
     }
   }

  }else if (which == 2){
    if (i == 0){
      ///Vincent's base stats
      name = 'Vincent'
      health = 50
      stealth = 3
      attack = 10
      image.src = "images/market.png"
      description.innerHTML = 'Before you set off on your journey you stop in the local town to gather supplies'
      buttonA.innerHTML = 'You use ingriendients from the market to craft potions of invisibility'
      buttonB.innerHTML = 'You visit the armor smith and get a Mythril Chestplate'
    }

    if (i == 1){
      health += 5
      console.log(health)
        image.src = "images/crocs.png"
      description.innerHTML = 'The next morning you set off for the tower but it is surronded by a moat'
      buttonA.innerHTML = 'You choose to make a boat to sail across the moat'
      buttonB.innerHTML = 'You choose to swim through the moat unsure if their are any animals inside'
    }

    if (i == 2) {
      eventgen();
      special
      console.log(special)
      if(special == true){
        image.src = "images/mageattack.png"
        description.innerHTML = 'An alligator is approching you!'
        buttonA.innerHTML = 'You wack it in the head with your staff'
        buttonB.innerHTML = 'You try and sneak by it'
        buttonB.onclick = check = 'stealth'
        console.log(check)
      } else{
        i=4
      }
    }

    if (i == 3) {
      if (check == 'magic'){
        description.innerHTML = 'The alligator relaxs its jaw and slides back into the water allowing you to get to the tower'
        buttonA.innerHTML = 'You tie up the boat before heading inside'
        buttonB.innerHTML = 'You go straight into the tower after swimming through the river'
    }else if (check == 'stealth'){
      if(stealth >= 7){
      description.innerHTML = 'The alligator does not seem to notice you and you are able to slip right past'
      buttonA.innerHTML = 'You dry off your clothes before heading inside'
      buttonB.innerHTML = 'You go straight into the tower after clearing the river'
    }else {
      prompt("The alligator lunges from the water grabbing you and pulling you under the water")
    }

    }

  }

  if(i == 4) {
    image.src = "images/skelton.png"
    description.innerHTML = 'The tower doors creak as you push them open causing a long dead warrior to awaken'
    buttonA.innerHTML = 'You cast a beam of white light at it'
    buttonA.onclick = combat = Math.random()
      if(combat >= 0.5){
        description.innerHTML = 'The beam hits the skelton and his causes his bones disintigrate'//Call of Duty Hit Marker Noise Here
        buttonA.innerHTML = ''
        buttonB.innerHTML = ''
      }else{
        description.innerHTML = 'The skelton rushes at you as you shoot the beam causing '
        buttonA.innerHTML = ''
        buttonB.innerHTML = ''
      }
    buttonB.innerHTML = 'You look around the room'
  }

}

i++
}

function eventgen() {
  special = Math.floor((Math.random() * 10) + 1);
  if(special >= 7){
    special = true
    return special
  }else {
    special = false
    return special
  }
}
