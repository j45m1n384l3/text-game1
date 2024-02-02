const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let btn = document.querySelector(".burger");
let mnc = document.querySelector(".menucontent");
btn.addEventListener("click", () => {
  if (mnc.style.display === "none") {
    mnc.style.display = "block";
  } else {
    mnc.style.display = "none";
  }
});



//end of the menu
function startGame() {
  //state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null //|| option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  //state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

/*var fartyh = new Audio(src='link');
result = fartyh.play();
/*function testNum(a) {
  let result;
  if (2 > 0) {
    result = fartyh.play();
  }  
}*/

function changeColor(color) { 
  document.body.style.background = color; 
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a cold, dark place. You can feel only the stone floor, but cannot see absolutely nothing.',
    options: [
      {
        text: 'You go back to sleep.',
        nextText: 2
      },
      {
        text: 'You search your pockets.',
        setState: { latarka: true },
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Hypothermia.',
    options: [
      {
        text: 'RESTART',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text: 'In one of the pockets you find a faintly glowing flashlight. You could put it to use now OR save the battery for later and try finding the exit in complete darkness.',
    options: [
      {
        text: 'Use the flashlight now.',
        nextText: 4
      },
      {
        text: 'Save the battery.',
        nextText: 5
      }
    ]
  }, 
  {
    id: 4,
    text: 'You turn on the flashlight. The room you are in is so big that the slope of light doesnt reach any wall, nor the ceiling. Finally you found the exit. Suddenly the light goes out.',
    setState: { flashlight: false },
    options: [
      {
        text: 'Carefully step outside the door from under which the wind is blowing.',
       nextText: 6
      },
      {
        text: 'Try to remember where the door is and search some more (in complete darkness, again).',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'Somehow you manage to find a door. You feel the floor having a downward slope to it and a cold breeze of a wind. Smells like snow. Do you use the flashlight now or do you try going in blind?',
    options: [
      {
        text: 'Use the flashlight.',
        nextText: 8
       },
       {
         text: 'You try to get down and save the light for later.',
         nextText: 6
        }
      ]
       },
  {
    id: 6,
    text: 'You step warily on a sloped surface. It took a long time but finally you are outside. After what felt like an eternity of walking in circles in deep snow, you are in a warm log cabin. Just kidding. Hallucinations. Hypothermia.',
    options: [
      {
        text: 'RESTART',
        nextText: 1
      }
    ]
  },
  {
    id: 7,
    text: 'Turns out there is no exit? You wander around for what feels like days or weeks? Maybe hours. You die out of fatigue.',
    options: [
      {
        text: 'RESTART',
        nextText: 1
      }
    ]
  },
  {
    id: 8,
    text: 'You see two neatly wrapped pouches. Which one do you reach for first?',
    options: [
      {
        text: 'Left one.',
        setState: { potato: true },
        nextText: 9
       },
       {
         text: 'Right one.',
         setState: { dagger: true },
         nextText: 9
        }
      ]
   },
   {
     id: 9,
     text: 'You hear a rustle behind you. You turn around and see a huge shadow staring into your eyes. You quickly unpack the package, hoping it will help you defend yourself against the creature..',
     
     options: [
      {
        text: 'Unwrap it.',
        requiredState: (currentState) => currentState.potato,
        setState: { potato: false },
        nextText: 10
      },
      {
        text: 'Unwrap it.',
        requiredState: (currentState) => currentState.dagger,
        setState: { dagger: false },

        nextText: 11
      }
    ]
  }, 
   {
     id: 10,
     text: 'The package contained a still warm potato wrapped in foil. You throw it towards the shadow and it disappears along with the potato. Like... literally.',
     
     options: [
       {
         text: 'You run downstairs',
         nextText: 6
       }
     ]
   },
   {
     id: 11,
     text: 'The package contained a dagger. With a hesitant push, you strike a blow at the monster. Nothing happens, his form offers no resistance. Apparently it is not a solid. You lose consciousness. You wake up in a dark, cold place...',
     options: [
      {
        text: 'You can feel only the stone floor...',
        nextText: 1
      }
    ]
  }
]


startGame()