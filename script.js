function updateTime() {
        const timeElement = document.getElementById("timeElement");
        const now = new Date();
        const formattedTime = now.toLocaleString();
        timeElement.textContent = formattedTime;
      }

      setInterval(updateTime, 1000);
      
      
      // Make the DIV element draggable:
      dragElement(document.getElementById("window"));


function dragElement(element, dragAnywhere = false) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header") && !dragAnywhere) {
    
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
   
    element.onmousedown = startDragging;
  }

  
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    
    initialX = e.clientX;
    initialY = e.clientY;
    
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var welcomeWindow = document.querySelector("#window")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeWindow);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeWindow);
});
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}
dragElement(document.querySelector("#notes"), true)
var notesWindow = document.querySelector("#notes")
var notesScreenOpen = document.querySelector("#notesopen")
var notesScreenClose = document.querySelector("#notesclose")

notesScreenOpen.addEventListener("click", () => openWindow(notesWindow))
notesScreenClose.addEventListener("click", () => closeWindow(notesWindow))

var content = [
  {
    title: "Welcome",
    date: "03/09/2026",
    content: `
      <h3>Welcome to Sussy Notes!</h3>
      <p>These are my very sussy notes that i write when i feel sussy. Enjoy!</p>
    `
  },
   {
    title: "Colors",
    date: "03/09/2026",
    content: `
      <h3>My colors are wierd...</h3>
      <p>Whenever i color something white it comes out dark but when i color something dark it comes out dark aswell. Help please i have no access to white colors!</p>
    `
  },
   {
    title: "Coding",
    date: "03/09/2026",
    content: `
      <h3>I NEED HELP!</h3>
      <p>I'm getting tired of coding i can't even read the guide anymore and i'm having troubles writing this note. I need some sleep...</p>
    `
  },
  {
    title: "Insanity",
    date: "03/09/2026",
    content: `
      <h3>IM LOSING MY MIND</h3>
      <p>I FEEL LKE THERES SOMEONE WATCHING ME THROUGH THE SCREEN!! AMONGUS CHARACTERS ARE EVERYWHERE I SEE THEM IN MY SLEEP!!!</p>
    `
  },
  {
    title: "Project Ideas",
    date: "03/09/2026",
    content: `
      <h3>Project phone holder</h3>
      <ul>
        <li>Step 1: Design phone holder</li>
        <li>Step 2: Construct phone holder</li>
        <li>Step 3: Profit</li>
      </ul>
    `
  }
];


function setNotesContent(index) {
  var displayDiv = document.querySelector("#note-text");
  displayDiv.innerHTML = content[index].content;
}


function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];

  var newDiv = document.createElement("div");
  newDiv.style.cursor = "pointer";
  newDiv.style.padding = "8px";
  newDiv.style.marginBottom = "6px";
  newDiv.style.backgroundColor = "#f0f0f0";
  newDiv.style.borderRadius = "6px";

  newDiv.innerHTML = `
    <p style="margin: 0; font-weight: bold; font-size: 14px; color: #333;">${note.title}</p>
    <p style="margin: 2px 0 0 0; font-size: 11px; color: #777;">${note.date}</p>
  `;

 
  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });

  sidebar.appendChild(newDiv);
}


for (let i = 0; i < content.length; i++) {
  addToSideBar(i);
}


setNotesContent(0);
   
      const clickerOpen = document.getElementById('clickeropen');
      const clickerClose = document.getElementById('clickerclose');
      const clickerWindow = document.getElementById('clickerWindow');
      
      const clickCountEl = document.getElementById('clickCount');
      const highScoreEl = document.getElementById('highScore');
      const crewmate = document.getElementById('crewmate');
      const clickArea = document.getElementById('clickArea');

      let clicks = 0;
      let highScore = localStorage.getItem('sus_high_score') || 0;
      highScoreEl.textContent = highScore;

      
      clickerOpen.addEventListener('click', () => {
        clickerWindow.style.display = 'block';
      });

      clickerClose.addEventListener('click', () => {
        clickerWindow.style.display = 'none';
      });

      
      crewmate.addEventListener('click', (e) => {
        clicks++;
        clickCountEl.textContent = clicks;

        if (clicks > highScore) {
          highScore = clicks;
          highScoreEl.textContent = highScore;
          localStorage.setItem('sus_high_score', highScore);
        }

       
        const rect = clickArea.getBoundingClientRect();
        const x = e.clientX - rect.left - 10;
        const y = e.clientY - rect.top - 20;

        const pop = document.createElement('div');
        pop.className = 'pop-text';
        pop.textContent = '+1';
        pop.style.left = `${x}px`;
        pop.style.top = `${y}px`;

        clickArea.appendChild(pop);

        setTimeout(() => pop.remove(), 500);
      });
      
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("rouletteopen");
  const closeBtn = document.getElementById("rouletteclose");
  const windowEl = document.getElementById("rouletteWindow");
  const gameArea = document.getElementById("rouletteGameArea");
  const bsodScreen = document.getElementById("bsodScreen");
  const bsodClose = document.getElementById("bsodClose");
  const victoryOverlay = document.getElementById("rouletteVictory");
  const restartBtn = document.getElementById("rouletteRestartBtn");

  dragElement(windowEl);

  const TOTAL_CREWMATES = 10;
  let impostorIndex = -1;
  let remainingCrewmates = TOTAL_CREWMATES;

  const crewmateImages = [
    "zdjecia/peach1.png",
    "zdjecia/blue1.png",
    "zdjecia/purpleish1.png",
    "zdjecia/yellow1.png",
    "zdjecia/orange1.png",
    "zdjecia/purple1.png",
    "zdjecia/obraz_2026-09-03_230113887-removebg-preview.png",
    "zdjecia/lime1.png",
    "zdjecia/pink1.png",
    "zdjecia/green1.png"
  ];

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      windowEl.style.display = "block";
      initRouletteGame();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      windowEl.style.display = "none";
    });
  }

  function initRouletteGame() {
    remainingCrewmates = TOTAL_CREWMATES;
    impostorIndex = Math.floor(Math.random() * TOTAL_CREWMATES);
    victoryOverlay.style.display = "none";
    bsodScreen.style.display = "none";

    const oldSlots = document.querySelectorAll(".roulette-slot");
    oldSlots.forEach((slot) => slot.remove());

    const radius = 170;
    const centerX = 325;
    const centerY = 250;

    for (let i = 0; i < TOTAL_CREWMATES; i++) {
      const angle = (i * (360 / TOTAL_CREWMATES) - 90) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle) - 32;
      const y = centerY + radius * Math.sin(angle) - 32;

      const slot = document.createElement("div");
      slot.className = "roulette-slot";
      slot.style.left = `${x}px`;
      slot.style.top = `${y}px`;

      const img = document.createElement("img");
      img.src = crewmateImages[i];
      img.style.width = "60px";
      img.style.height = "60px";
      img.style.pointerEvents = "none";
      
      img.onerror = () => {
        img.style.display = "none";
        slot.innerText = `Crew ${i + 1}`;
        slot.style.color = "#fff";
        slot.style.fontSize = "10px";
        slot.style.textAlign = "center";
      };

      slot.appendChild(img);

      slot.addEventListener("click", () => {
        if (i === impostorIndex) {
          bsodScreen.style.display = "block";
        } else {
          slot.classList.add("eliminated");
          remainingCrewmates--;
          if (remainingCrewmates === 1) {
            victoryOverlay.style.display = "flex";
          }
        }
      });

      gameArea.appendChild(slot);
    }
  }

  if (bsodClose) {
    bsodClose.addEventListener("click", () => {
      bsodScreen.style.display = "none";
      initRouletteGame();
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      initRouletteGame();
    });
  }
});
 