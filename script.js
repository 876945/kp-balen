// 1. Grab all elements
const diva = document.getElementById("dv");
const ina = document.getElementById("in");
const inb = document.getElementById("if");
const buttona = document.getElementById("btn");
const pa = document.getElementById("p");

const divb = document.getElementById("jj");
const buttonb = document.getElementById("btnn"); // Yes
const buttonc = document.getElementById("bttn"); // No

const divc = document.getElementById("dc");
const pb = document.getElementById("id");
const buttond = document.getElementById("bln"); // Balen
const buttone = document.getElementById("kp");  // KP

const divd = document.getElementById("bmk");
const pc = document.getElementById("wn");

// Helper to switch screens
function showScreen(screenToShow) {
    [diva, divb, divc, divd].forEach(screen => screen.classList.remove('active-flex'));
    screenToShow.classList.add('active-flex');
}

// 2. Register function
function register() {
  if (ina.value.trim() !== "" && inb.value.trim() !== "") {
    pa.textContent = `Thank you ${ina.value}, please wait...`;

    setTimeout(() => {
      showScreen(divb);
    }, 1500);

  } else {
    pa.textContent = "❌ Please fill in all fields";
    pa.style.color = "red";
  }
}

// 3. Welcome buttons (Yes/No)
function welcomeChoice(event) {
  if (event.target === buttonb) {
    showScreen(divc);
    pb.textContent = `Welcome ${ina.value}! Pick your side:`;
  } else {
    showScreen(diva);
    pa.textContent = "Try again when you're ready!";
    pa.style.color = "#185688";
  }
}

// 4. Game buttons (Balen / KP)
function gameChoice(event) {
  showScreen(divd);
  if (event.target === buttond) {
    pc.textContent = "Thanks for your support! 🥂💫 Balen is the vibe!";
  } else {
    pc.innerHTML = `${ina.value}, भाग त केपीको झोले! 😡<br><small>(Hurry up and run!)</small>`;
  }
}

// 5. Event Listeners
buttona.addEventListener("click", register);
buttonb.addEventListener("click", welcomeChoice);
buttonc.addEventListener("click", welcomeChoice);
buttond.addEventListener("click", gameChoice);
buttone.addEventListener("click", gameChoice);