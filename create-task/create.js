let i = 0
let health = 10
let stealth = 0
let attack = 0
let name
let special
let check
let combatv
let statue = false
let temp
let text

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
       description.innerHTML = 'As you push open the tower doors, they creak and moan causing a long dead warrior to awaken'
       buttonA.innerHTML = 'You cast a beam of white light at it'
       buttonB.innerHTML = 'You try and sneak around the room using the shadows and rocks'
     }

     if(i == 5) {
        combat(combatv);
        if(combatv >= 0.5){
          console.log(i)
          image.src = "images/swordpile.png"
          description.innerHTML = 'The beam hits the skelton and his causes his bones disintigrate'//Call of Duty Hit Marker Noise Here
          buttonA.innerHTML = 'Head up to the next floor taking a bone with you'
          buttonB.innerHTML = 'Take his sword and move onto the next floor'
        }else{
          health -= 10
          console.log(i)
          image.src = "images/swordpile.png"
          buttonA.innerHTML = 'Heal the wound and head to the next floor'
          description.innerHTML = 'The skelton rushes at you as you shoot the beam causing you to only just hit him as you get slahed by his sword'
          buttonB.innerHTML = 'Move onto the next floor taking his sword with you'
        }
      }

      if (i==6) {
        health +=7
        console.log(health)
          image.src = "images/statue.png"
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
          i=99
        }else {
          i++
        }
}

  if(i==9) {
      image.src = "images/orb.png"
      description.innerHTML = 'Well done on answering my riddle. by doing so you have helped break the curse put on me by the creator this evil tower, please accept this gift before you leave gift'
      buttonA.innerHTML = 'Take his gift of strength'
      buttonB.innerHTML = 'Say you are honored but will have to refuse'
  }

if(i==10){
  attack += 10
  image.src = "images/door.png"
  description.innerHTML = 'You feel stronger than ever before as you enter the next floor'
  buttonA.innerHTML = 'Be cautious as you enter the next floor'
  /////You enter the floor and don't see anything
  ///// look around or walk through
  ////////Walk through = death
  //////// Look around you spot the chameleeon and can fight ot sneaek
  ////////fight links up with other path
  ///////sneak = pass to next floor
  buttonB.innerHTML = 'Burst into the room with magic drawn'
}

if (i==11){
  description.innerHTML = 'You slowly open the door to the next floor being careful to make almost no noise'
  buttonA.innerHTML = 'Look around the room before making any moves through the room'
  ////////Walk through = death
  //////// Look around you spot the chameleeon and can fight ot sneaek
  ////////fight links up with other path
  ///////sneak = pass to next floor
  buttonB.innerHTML = 'Move around the room to the next floor'
}

if (i==12){
    image.src = "images/iguanadon.png"
  description.innerHTML = 'As you look around the room you notice a giant chameleon hanging from the ceiling staring at you'
  buttonA.innerHTML = "Sneak around the room moving out of the chameleon's field of view and reach"
  //////// Look around you spot the chameleeon and can fight ot sneak
  ////////fight links up with other path
  ///////sneak = pass to next floor
  buttonB.innerHTML = 'Go to attack the chameleon'
}

if(i==13){
  if(stealth >= 15){
  i = 18
  description.innerHTML = "The chameleon doen't notice you as you slowly move around chamber avoiding his eye sight and making no noise"
  buttonA.innerHTML = 'Move to the next floor'
  buttonB.innerHTML = 'Look around the room for extra loot'
  }else{
  description.innerHTML = "The chameleon notices you as you failed to hide from his sight"
  buttonA.innerHTML = 'Attack the Chameleon'
  buttonB.innerHTML = 'Stand Still'
  }
}

if(i==14){
  i=15
    image.src = "images/chameleonjuice.png"
  description.innerHTML = "The chameleon drops down from the ceiling shaking the ground as he lands and spitting acid onto you"
  buttonA.innerHTML = "Use your staff and go in for a close range attack"
  buttonB.innerHTML = "Attempt to calm down and pacify the chameleon using a spell"
}

if(i==16){
  if(attack <= 11){
    text = "undogable staff attacks and it can only flail its arms in defense"
  }else{
    health -=10
    text = "staff hits, but it flails it's arms and blocks some of your attacks and in response delivers a strong blow to your gut"
  }
  description.innerHTML = `You dash up to the chameleon hitting it with a flury of ${text}`
  buttonA.innerHTML = "Summon an ice chunk to finish of the chameleon"
  buttonB.innerHTML = "Hit it with a magic missle to finsh it off"
}

if(i==17){
  description.innerHTML = "The chameleon falls over as the massive chunk of ice hits him pinning him to the ground"
  buttonA.innerHTML = "Head up to the next floor charging your magic for the dragon ahead"
  buttonB.innerHTML = "Advance to the next floor healing all the damage you sustained on your journey to the top of the tower"
}

if(i==18){
 console.log(health, stealth, attack)
 attack += 10
 ran();
 description.innerHTML = "Show Text"
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
      buttonA.innerHTML = 'You use ingriendients from the market to craft potions that will muffle your movement'
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
        buttonB.innerHTML = 'You go straight into the tower after crossing the river'
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
      i=99
    }
    }
}
////Insert here
  if(i == 4) {
    image.src = "images/skeleton.png"
    description.innerHTML = 'As you make it into the tower, the doors creak as you push them open causing a long dead warrior to awaken'
    buttonA.innerHTML = 'You cast a beam of white light at it'
    buttonB.innerHTML = 'You look around the room and try to sneak around the skeleton using the shadows'
  }

 if(i == 5){
   if(stealth >= 7){
   image.src = "images/sneak.png"
   description.innerHTML = 'As you sneak around the room the skeleton does not notice you'
   buttonA.innerHTML = 'Go right to the door and open it to go to the next floor'
   buttonB.innerHTML = 'Take a longer path around the room that is darker to get to the next floor'
 }else{
   health -= 20
   console.log(i)
   image.src ="images/swordpile.png"
   description.innerHTML = 'As you sneak around the room the skeleton notices you and jabs you with his sword forcing you to shoot a blast of light at him causing him to disintigrate'
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
     description.innerHTML = 'The statue booms "WRONG", as he speaks smoke spews from the statues mouth causing you to choke with every breath you take'
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
      i=99
  }else {
    i++
  }
}

if(i==10) {
  statue = true
  image.src = "images/door.png"
  description.innerHTML = 'You feel relieved knowing you helped free the soul stuck in the statue as you move to the next floor'
  buttonA.innerHTML = 'Be cautious as you enter the next floor'
  /////You enter the floor and don't see anything
  ///// look around or walk through
  ////////Walk through = death
  //////// Look around you spot the chameleeon and can fight ot sneaek
  ////////fight links up with other path
  ///////sneak = pass to next floor
  buttonB.innerHTML = 'Burst into the room with magic drawn'
}

if(i==11){
  i = 15
}

if(i==12){
  image.src = "images/darksouls.jpg"
  description.innerHTML = "As you move through the room a tongue comes out of nowhere and sticks to you pulling up towards the ceiling with no escape the last thing you see being a giant chameleon"
  buttonA.innerHTML = "Restart Your Journey"
  buttonB.innerHTML = "Quit the Game"
  buttonA.value = "Restart"
  buttonB.value = "Quit"
  i=99
}

if(i==13){
  i = 15
}

if(i==14){
  image.src = "images/darksouls.jpg"
  description.innerHTML = "The chameleon notices you standing and shoots it's tongue out at you pulling into it's mouth"
  buttonA.innerHTML = "Restart Your Journey"
  buttonB.innerHTML = "Quit the Game"
  buttonA.value = "Restart"
  buttonB.value = "Quit"
  i=99
}

if(i==15){
  health -= 20
  image.src = "images/chameleonjuice.png"
  description.innerHTML = "The chameleon drops down from the ceiling shaking the ground as he lands and spitting acid onto you"
  buttonA.innerHTML = "Use your staff and go in for a close range attack"
  buttonB.innerHTML = "Attempt to calm down and pacify the chameleon using a spell"
}

if(i == 16){
  health -= 20
  description.innerHTML = "The chameleon sways as it feels the effects of your spell, flailing it's arms wildly as it struggles not to fall asleep"
  buttonA.innerHTML = "Hit the chameleon with a chunk of ice to knock it out"
  buttonB.innerHTML = "Wait for the chameleon to fall asleep"
}

if(i==17){
  description.innerHTML = "The chameleon falls over after flailing it's arms and you are able to move to the next floor"
  buttonA.innerHTML = "Head up to the next floor charging your magic for the dragon ahead"
  buttonB.innerHTML = "Advance to the next floor healing all the damage you sustained on your journey to the top of the tower"
}

if(i==18){
  console.log(health, stealth, attack)
  health += 50

}

  }

  if(which==1 && i==100){
      refresh();
  }else if(which==2 && i==100){
    exit();
  }

i++

if(health <= 0){
  image.src = "images/darksouls.jpg"
  description.innerHTML = "You have taken too much damage and been too reckless in your journey to slay the dragon"
  buttonA.innerHTML = "Restart"
  buttonB.innerHTML = "Quit"
  i=99
}

}


function eventgen() {
  special = Math.floor((Math.random() * 10) + 1);
  if(special >= 4){
    special = true
    return special
  }else {
    special = false
    return special
  }
}

function combat(combatv){
  combatv = Math.random()
}

function refresh(){
  window.location = "create.html"
}

function exit(){
  window.location = "https://www.google.com/"
}

function newPic1(){
  let backImg = document.getElementById('A')
  temp = (Math.random() * 100);
  if (temp <= 25) {
    backImg.color = "red";
  } else if (temp <= 50  && temp > 25) {
    backImg.color = "green";
  } else if (temp <=75 && temp > 50){
    backImg.color = "yellow";
  } else{
    backImg.color = "blue";
  }
  console.log(backImg.color);
}

function newPic2(){
  let backImg = document.getElementById('B')
  temp = (Math.random() * 100);
  if (temp <= 25) {
    backImg.color = "red";
  } else if (temp <= 50  && temp > 25) {
    backImg.color = "green";
  } else if (temp <=75 && temp > 50){
    backImg.color = "yellow";
  } else{
    backImg.color = "blue";
  }
}

function ran() {
  newPic1();
  newPic2();
}
