let i = 0
let health = 10
let stealth = 0
let attack = 0
let name
let special
let check
let combatv
let statue = false
let wing
let temp1
let temp2

let todaysDate = Date()

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
          description.innerHTML = `The smoke keeps pouring out of the statues mouth and eventually you can no longer breath, you died on ${todaysDate}`
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
 colorSwap();
 image.src = "images/finally.png"
 special = "strongMagic"
 description.innerHTML = "As you reach the top of the tower a thick smoke fills the air as it starts to clear you hear a guttoral roar and see the dragon fly onto the platform. You feel ready to face it as your staff"
 buttonA.innerHTML = "Attack the dragon at a distance by summoning lighting to strike it"
 buttonB.innerHTML = "Try getting up close to the dragon and using your staff for close range attacks"
}

if(i==19){
 console.log(health, stealth, attack)
 colorSwap();
 if(special == "strongMagic"){
   description.innerHTML = "The charged up magic you have is released as the lighting come down on the dragon dealing a devestating blow to his wings"
   buttonA.innerHTML = "Stay at a range and use ice magic on it "
   buttonB.innerHTML = "Move in close as it is now crippled"
 }else{
   special = "weakMagic"
 description.innerHTML = "You summon lighting down on the dragon only temporarily stunning him"
 buttonA.innerHTML = "Stay at a distance and try to sneak around it looking for a weak spot"
 buttonB.innerHTML = "Try to get up close and hit it with a melee attack"
}

}


if (i==20){
  if(special == "strongMagic"){
   description.innerHTML = "The dragon breathes fire at you as it tries to melt a volley of ice spears you sent at it. You see that many of the spears made it and the dragon is in pain"
   buttonA.innerHTML = "Finsh off the dragon using the ground below it"
   buttonB.innerHTML = "Run up to the dragon and finish it off with a close range spell"
 }else if(special == "weakMagic" || special == "weakAttack"){
   if(stealth >= 15){
    description.innerHTML = "As you sneak around the dragon you notice a spot where it is missing scales"
    buttonA.innerHTML = "Stay where you are and keep observing, waiting for an opening"
    buttonB.innerHTML = "Rush up to the dragon attempting to hit it in the scaless spot"
  }else{
    description.innerHTML = `The dragon scorches you in fire as it sees you attempt to sneak around it. You burned to a crisp on ${todaysDate}`
    buttonA.innerHTML = "Restart your journey"
    buttonB.innerHTML = "Quit the Game"
  }
  }else if(special == "strongAttack"){
    description.innerHTML = "You grab the dragon by it's horns and pull yourself onto it's head"
    buttonA.innerHTML = "Ride the dragon and make it fall off the tower"
    buttonB.innerHTML = "Turn your staff into a great sword and plung it into the dragon's head and cut it off"
  }
}

if(i==21){
  i=99
  image.src = "images/end.png"
  if(name == "Jariah"){
    name = "with the dragon defeated you were able to complete your research allowing you to become the wisest mage in all the lands and create a cure for the disease affecting your homeland"
  }else{
    name = "with the dragon defeated you can now rest easy knowing you have avenged your family and town. You do not know where you will go from here but for now you are at peace."
  }
  if(special == "strongMagic"){
   description.innerHTML = `The dragon dies as it is hit with a huge stone pulled from the ground ${name}`
   buttonA.innerHTML = "Go on another adventure"
   buttonB.innerHTML = "Quit the Game"
 }else if(special == "weakMagic" || special == "weakAttack"){
    description.innerHTML = `You break from your cover when you seen an opening and stab it in the weak spot causing it to let out one last roar and slump over. ${name}`
    buttonA.innerHTML = "Go on another journey up the tower"
    buttonB.innerHTML = "Quit the Game"
  }else if(special == "strongAttack"){
    description.innerHTML = `You use the last of your strength and magic to push the dragon off the tower and see it fall through the clouds to the ground ${name}`
    buttonA.innerHTML = "Start a new journey"
    buttonB.innerHTML = "Quit the Game"
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
      description.innerHTML = `The alligator grasps your leg tightly and pulls you under water, you were unable to escape and you died on ${todaysDate}`
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
      description.innerHTML = `The smoke keeps pouring out of the statues mouth and eventually you can no longer breath, you died on ${todaysDate}`
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
  description.innerHTML = `As you move through the room a tongue comes out of nowhere and sticks to you pulling up towards the ceiling with no escape the last thing you see being a giant chameleon, you died on ${todaysDate}`
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
  description.innerHTML = `The chameleon notices you standing and shoots it's tongue out at you pulling into it's mouth, you died on ${todaysDate}`
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
  colorSwap();
  image.src = "images/finally.png"
  description.innerHTML = "As you reach the top of the tower a thick smoke fills the air as it starts to clear you hear a guttoral roar and see the dragon fly onto the platform. You feel ready to face it as your body tingles with magic"
  buttonA.innerHTML = "Attack the dragon at a distance by summoning lighting to strike it"
  buttonB.innerHTML = "Try getting up close to the dragon and using your staff for close range attacks"
}

if(i==19){
 console.log(health, stealth, attack)
 colorSwap();
  if(attack > 25){
    special = "strongAttack"
    description.innerHTML = "You rush up to the dragon as it is still observing you and deliver multiple brutal blows using ice magic to turn your staff into a warhammer"
    buttonA.innerHTML = "Try to mount the dragon as it seems stunned"
    buttonB.innerHTML = "Try and cripple it's wings so it cannot escape"
  }else{
    health -=10
    special = "weakAttack"
    description.innerHTML = "As your rush up to the dragon it uses it's wings to create a gust of wind that knocks you off balence and forces you to retreat"
    buttonA.innerHTML = "Attempt to sneak around the dragon and look for a weak point"
    buttonB.innerHTML = "Try to rush up to the dragon again"
}
}

if (i==20){
  if(special == "strongMagic"){
    description.innerHTML = "As you rush up to the dragon you envelop your staff in magic and bring it down onto the dragon's head"
    buttonA.innerHTML = "Freeze the dragon completly"
    buttonB.innerHTML = "Fry the dragon with electricity"
  }else if(special == "weakMagic" || special == "weakAttack"){
    i=99
    image.src = "images/darksouls.png"
    description.innerHTML = `As you rush up to the dragon and approch the weak point it lifts off the ground and into the air and squishes you with it's claws. You died at ${todaysDate}`
    buttonA.innerHTML = "Restart your Journey"
    buttonB.innerHTML = "Quit the Game"
  }else if(special == "strongAttack") {
    description.innerHTML = "You move around the dragon hitting its wings as it tries to protect itself"
    buttonA.innerHTML = "Push the dragon off the tower"
    buttonB.innerHTML = "Cut off it's head"
  }
}

if(i==21){
  i=99
  image.src = "images/end.png"
  if(name == "Jariah"){
    name = "with the dragon defeated you were able to complete your research allowing you to become the wisest mage in all the lands and create a cure for the disease affecting your homeland"
  }else{
    name = "with the dragon defeated you can now rest easy knowing you have avenged your family and town. You do not know where you will go from here but for now you are at peace."
  }
  if(special == "strongMagic"){
   description.innerHTML = `You run up to the dragon hitting it with one final blow sending a shockwave through it's body ${name}`
   buttonA.innerHTML = "Go on another adventure"
   buttonB.innerHTML = "Quit the Game"
 }else if(special == "weakMagic" || special == "weakAttack"){
    description.innerHTML = `As you rush up to the dragon it shoots into the air and impales you with its tail ${todaysDate}`
    buttonA.innerHTML = "Restart your Journey"
    buttonB.innerHTML = "Quit the Game"
  }else if(special == "strongAttack"){
    description.innerHTML = `The dragon's head rolls across the floor as you deliver the final blow ${name}`
    buttonA.innerHTML = "Start a new journey"
    buttonB.innerHTML = "Quit the Game"
  }
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
  description.innerHTML = `You have taken too much damage and been too reckless in your journey to slay the dragon, you died on ${todaysDate}`
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

function newColor1(){
  let backImg1 = document.getElementById("A")
  temp1 = (Math.random() * 100);
  if (temp1 <= 25) {
    backImg1.style.backgroundColor = "Khaki";
  } else if (temp1 <= 50  && temp1 > 25) {
    backImg1.style.backgroundColor = "PowderBlue";
  } else if (temp1 <=75 && temp1 > 50){
    backImg1.style.backgroundColor = "Gold";
  } else{
    backImg1.style.backgroundColor = "MistyRose";
  }
  console.log(backImg1.style.backgroundColor);
}

function newColor2(){
  let backImg2 = document.getElementById("B")
  temp2 = (Math.random() * 100);
  if (temp2 <= 25) {
    backImg2.style.backgroundColor = "Khaki";
  } else if (temp2 <= 50  && temp2 > 25) {
    backImg2.style.backgroundColor = "PowderBlue";
  } else if (temp2 <=75 && temp2 > 50){
    backImg2.style.backgroundColor = "Gold";
  } else{
    backImg2.style.backgroundColor = "MistyRose";
  }
  console.log(backImg2.style.backgroundColor);
}

function colorSwap() {
  newColor1();
  newColor2();
}
