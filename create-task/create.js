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
       check = 'magic'
     } else {
       i = 4
       ////insert first floor
     }
   }

   if(i==3){
     if (attack > 5){
       description.innerHTML = 'The alligator leaves you alone and sinks back into the water'
       buttonA.innerHTML = 'You dry off and head inside'
       buttonB.innerHTML = 'You head inside immediatly'
     } else {
       description.innerHTML = 'The alligator bites at your staff but then leaves you alone'
       buttonA.innerHTML = 'You dry off and head inside'
       buttonB.innerHTML = 'make camp and rest for a day then head inside'
     }
   }

   if(i == 4) {
       image.src = "images/skeleton.png"
       description.innerHTML = 'As you make it into the tower, the doors creak as you push them open causing a long dead warrior to awaken'
       buttonA.innerHTML = 'You cast a beam of white light at it'
       buttonB.innerHTML = 'You try and sneak around the room using the shadows and rocks'
     }

     if(i == 5) {
        buttonA.onclick = combat = Math.random()
        if(combat >= 0.5){
          console.log(i)
          image.src = "images/swordpile.png"
          description.innerHTML = 'The beam hits the skelton and his causes his bones disintigrate'//Call of Duty Hit Marker Noise Here
          buttonA.innerHTML = 'Head up to the next floor taking a bone with you'
          buttonB.innerHTML = 'Take his sword and move onto the next floor'
        }else{
          health -= 10
          image.src = "images/swordpile.png"
          description.innerHTML = 'The skelton rushes at you as you shoot the beam causing you to only just hit him as you get slahed by his sword'
          buttonA.innerHTML = 'Heal the wound and head to the next floor'
          buttonB.innerHTML = 'Move onto the next floor taking his sword with you'
        }
      }

      if (i==6) {
        health +=7
        console.log(health)
          description.innerHTML = 'The next room is empty accept for a large statue, when you walk up to it it asks you a question "What is it that we love more than life, fear more than death, the rich want it, the poor have it, and the miser spends it?"'
          buttonA.innerHTML = 'Nothing'
          buttonB.innerHTML = 'Family'
      }

      if (i==7){
        i++
    }

    if (i==8) {
        if (check == "smoke"){
          image.src = "images/darksouls.jpg"
          description.innerHTML = "The smoke keeps pouring out of the statues mouth and eventually you can no longer breath"
          buttonA.innerHTML = "Restart Your Journey"
          buttonB.innerHTML = "Quit the Game"
          buttonA.value = "Restart"
          buttonB.value = "Quit"
        }else {
          i++
        }
}

  if(i==9) {
      description.innerHTML = 'Well done on answering my riddle you have freed me from the curse binding me to this statue, continue on your journey up the tower but before you go please accept my gift'
      buttonA.innerHTML = 'Take his gift of strength'
      buttonB.innerHTML = 'Say you are honored but will have to refuse'
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
      console.log(special)
      if(special == true){
        image.src = "images/mageattack.png"
        description.innerHTML = 'An alligator is approching you!'
        buttonA.innerHTML = 'You wack it in the head with your staff'
        buttonB.innerHTML = 'You try and sneak by it'
        check = "stealth"
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
      image.src = "images/darksouls.jpg"
      description.innerHTML = "You got gamed by the alligator"
      buttonA.innerHTML = "Restart Your Journey"
      buttonB.innerHTML = "Quit the Game"
      buttonA.value = "Restart"
      buttonB.value = "Quit"
    }
    }
}
////Insert here
  if(i == 4) {
    image.src = "images/skeleton.png"
    description.innerHTML = 'As you make it into the tower, the doors creak as you push them open causing a long dead warrior to awaken'
    buttonA.innerHTML = 'You cast a beam of white light at it'
    buttonB.innerHTML = 'You look around the room'
  }

 if(i == 5){
   if(stealth >= 7){
   image.src = "images/sneak.png"
   description.innerHTML = 'As you sneak around the room the sketon does not notice you'
   buttonA.innerHTML = 'Go right to the door and open it to go to the next floor'
   buttonB.innerHTML = 'Take a longer path around the room that is darker to get to the next floor'
 }else{
   health -= 20
   console.log(i)
   image.src ="images/swordpile.png"
   description.innerHTML = 'As you sneak around the room the sketon notices you and jabs you with his sword forcing you to shoot a blast of light at him causing him to disintigrate'
   buttonA.innerHTML = 'Heal the wound and head to the next floor'
   buttonB.innerHTML = 'Take his sword with you and head to the next floor'
 }
}
 if (i==6) {
   attack += 7
   console.log(health)
    image.src ="images/statue.png"
     description.innerHTML = 'The next room is empty accept for a large statue, when you walk up to it it asks you a question "What is it that we love more than life, fear more than death, the rich want it, the poor have it, and the miser spends it?"'
     buttonA.innerHTML = 'Nothing'
     buttonB.innerHTML = 'Family'
 }

if (i==7) {
     check = "smoke"
     image.src = "images/smoked.png"
     description.innerHTML = 'The statue booms "WRONG", as he speaks black Smoke spews from the statues mouth causing you to choke with every breath you take'
     buttonA.innerHTML = 'Let the room fill up with smoke as you hold your breath'
     buttonB.innerHTML = 'Try to break down the statue'
}

if (i==8) {
  if (check == "smoke"){
      image.src = "images/darksouls.jpg"
      description.innerHTML = "The smoke keeps pouring out of the statues mouth and eventually you can no longer breath"
      buttonA.innerHTML = "Restart Your Journey"
      buttonB.innerHTML = "Quit the Game"
      buttonA.value = "Restart"
      buttonB.value = "Quit"
  }else {
    i++
  }
}

if(i==9) {

}

  }
i++


if (buttonA.value == "Restart"){
  buttonA.onclick = refresh();
}else if(buttonB.value == "Quit"){
  buttonB.onclick= exit();
}
}

function eventgen() {
  special = Math.floor((Math.random() * 10) + 1);
  if(special >= 0){ ////////////CHANGE THISS BVACKCKCKCCKCKCKCKCKCK
    special = true
    return special
  }else {
    special = false
    return special
  }
}



function refresh(){
  window.location = "create.html"
}

function exit(){
  window.location = "https://www.google.com/"
}
