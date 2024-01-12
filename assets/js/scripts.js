// arrays and variables

const names = [
  "plato",
  "aristotle",
  "confucius",
  "thomas aquinas",
  "immanuel kant",
  /* "john locke",
  "jean jacques rousseau",
  "albert camus",
  "jean paul sartre",
  "martin heidegger",
  "ludwig wittgenstein",
  "epicurus",
  "gilbert ryle",
  "alain de botton",
  "diogenes",
  "thales",
  "zeno",
  "pyrrho",
  "rudolf carnap",
  "willard quine",
  "aj ayer",
  "karl popper",
  "david hume",
  "thomas hobbes",
  "niccolò machiavelli",
  "laozi",
  "sun tzu",
  "gottfried leibniz",
  "baruch spinoza",
  "thomas aquinas",
  "edmund husserl",
  "karl marx",
  "charles darwin",
  "sigmund freud",
  "carl jung",
  "simone weil",
  "johann fichte",
  "friedrich engels",
  "max weber",
  "george orwell",
  "wilhelm reich",
  "albert einstein",
  "blaise pascal",
  "arthur schopenhauer",
  "friedrich nietzsche",
  "avicenna",
  "auguste comte",
  "franz kafka",
  "henry james",
  "john dewey",
  "ludwig feuerbach",
  "michel foucault",
  "friedrich hayek",
  "alfred north whitehead",
  "bertrand russell",
  "john stuart mill",
  "thomas nagel",
  "simone de beauvoir",
  "aristophanes",
  "al farabi",
  "john rawls",
  "simone de beauvoir",
  "emil cioran",
  "claude levi strauss",
  "john searle",
  "georg wilhelm friedrich hegel",
  "alasdair macintyre",
  "herbert marcuse",
  "jurgen habermas",
  "william james",
  "martha nussbaum",
  "karl jaspers",
  "alexis de tocqueville",
  "albert schweitzer",
  "soren kierkegaard",
  "mary wollstonecraft",
  "thomas kuhn",
  "edmund burke",
  "robert nozick",
  "william of ockham",
  "karl jaspers",
  "edmund gettier",
  "george berkeley",
  "otto neurath",
  "henri bergson",
  "ernst mach",
  "peter singer",
  "george edward moore",
  "william kingdon clifford",
  "ludwig von mises",
  "karl mannheim",
  "alfred ayer"*/
];
  

  

const hints = [
  "Ancient Greek philosopher, student of Socrates, and founder of the Academy. Famous for his dialogues, including 'The Republic.'",
  "Tutor to Alexander the Great, known for his contributions to ethics, metaphysics, and natural philosophy. Founded the Lyceum.",
  "Chinese philosopher emphasizing ethics, morality, and social harmony. His teachings form the basis of Confucianism.",
  "Medieval theologian integrating Aristotelian philosophy with Christian theology. Wrote 'Summa Theologica.'",
  "German philosopher known for his Critique of Pure Reason. Developed the categorical imperative in ethics.",
  "Enlightenment thinker advocating for natural rights, social contract, and empiricism. Influential in political philosophy.",
  "Social contract theorist and philosopher of the Enlightenment. Emphasized the idea of the 'noble savage.'",
  
  ];
  

const quotes = [
"The only source of knowledge is experience. - Albert Einstein",
"Every artist was first an amateur. - Ralph Waldo Emerson",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
"Simplicity is the ultimate sophistication. - Leonardo da Vinci",
"All the world's a stage, and all the men and women merely players. - William Shakespeare",
];

const startGameSection = document.getElementById("startGameSection");
const gameArea = document.getElementById("game");
const endGameSection = document.getElementById("endGameSection");
const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const submitLetter = document.getElementById("submitLetter");
const playAnotherRound = document.getElementById("playAnotherRound");
const progressBar = document.getElementById("progressBar");
const title = document.getElementById("title");
const hintElement = document.getElementById("hint");
const noCigar = document.getElementById("noCigar");
const startButtons = document.querySelectorAll(".btn-diff");
const message = document.getElementById("message");
const attemptsLeftDisplay = document.getElementById("attemptsLeft");
const messageGame = document.getElementById("messageGame");

let hiddenName = getRandomName().toUpperCase();
let guessedName = createGuessedNameArray(hiddenName);
let letter = letterInput.value.toUpperCase();
let guessedLetters = [];
let initialAttempts; 
let correctGuessCount = 0;
let attemptsLeft;
let modal = document.getElementById("gameInstructionsModal");


//............ Event Listenters ...............//


// Event listener for the level difficulty selection
for (let button of startButtons) {
  button.addEventListener("click", (event) => {
    initialAttempts = parseInt(event.target.value); // Set the initial number of attempts
    attemptsLeft = initialAttempts;
    attemptsLeftDisplay.textContent = attemptsLeft;
    hideOrDisplay(startGameSection);
    hideOrDisplay(gameArea);
    letterInput.focus();
  });
}

// Submit letter button Event listener
submitLetter.addEventListener("click", handleGuess);

// Enter keypress Event listener
letterInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

// quit button Event listener
document.getElementById("quitGame").addEventListener("click", function () {
  correctGuessCount = 0;
  startNewRound();
  hideOrDisplay(startGameSection);
  hideOrDisplay(endGameSection);
});

// back button Event listener
document.getElementById("backButton").addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(gameArea);
  hideOrDisplay(startGameSection);
});

// Event listener for the play another round button
playAnotherRound.addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(endGameSection);
  hideOrDisplay(gameArea);
  letterInput.focus();
  document.getElementById("quote").innerHTML = ""; // Clear the quote message

});



//............ Functions ...............//


/** Function to hide or display the three game stages */ 
function hideOrDisplay(element) {
  element.classList.contains("hide") ? element.classList.remove("hide")
    : element.classList.add("hide");
}

/** Random name generator */ 
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

/** Creates an array of underscores and spaces to display the hidden name */
function createGuessedNameArray(name) {
  let guessedName = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      guessedName.push(" ");
    } else {
      guessedName.push("_");
    }
  }
  return guessedName;
}

/** Displays hint when attempts left = 1 */
function provideHint() {
  console.log('where is the hint!');
  const hintIndex = names.indexOf(hiddenName.toLowerCase());


  if (hintIndex !== -1 && hintIndex < hints.length) {
    hintElement.textContent = `Hint: ${hints[hintIndex]}`;
  }
  console.log(hintIndex, hintElement.textContent, hiddenName);
}

/** Handles the guess and displays the appropiate message */
function handleGuess() {
   
  if (attemptsLeft === 0) {
    return;
  }
  if (attemptsLeft === 2) {
    console.log('hint function called')
     provideHint();
   }
  
   const letter = letterInput.value.toUpperCase(); // Needs to be called here
  
  if (guessedLetters.includes(letter)) {
    messageGame.innerHTML = `<p>You've already guessed the letter '${letter}'. Try a different one.</p>`;
  } else {
    
    guessedLetters.push(letter);
    if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
      messageGame.innerHTML = "<p>Please enter a single uppercase letter.</p>";
    } else if (hiddenName.includes(letter) && !guessedName.includes(letter)) {
      for (let i = 0; i < hiddenName.length; i++) {
        if (hiddenName[i] === letter) {
          guessedName[i] = letter;
          updateProgressBar(); 
        }
      }
      wordDisplay.textContent = guessedName.join(" ");
      updateProgressBar(); 
      
      if (!guessedName.includes("_")) {
        correctGuessCount++;
        updateScoreboard(); 
        message.innerHTML = `<p>Congratulations! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below:`;
        displayRandomQuote();
        messageGame.innerHTML = `Would you like to play another round?`; 
        backgroundImage();
        document.body.style.backgroundImage =
          "url('assets/images/eureka.webp')";
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        submitLetter.disabled = true;
        playAnotherRound.style.display = "block";
        title.style.display = "none";
        noCigar.style.display = "none";
        document.getElementById("quote").classList.remove("hide"); 
}
      
    } else {
      attemptsLeft--;
      attemptsLeftDisplay.textContent = attemptsLeft;
      if (attemptsLeft === 0) {
        backgroundImage();
        document.body.style.backgroundImage = "url('assets/images/freud.webp')";
        noCigar.innerHTML = `Close but no Cigar ..... However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud`;
        noCigar.innerHTML = `Close but no Cigar ... the correct Thinker was '${hiddenName}'. However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud`;
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        title.style.display = "none";
        noCigar.style.display = "block";
      }
    }
  }
 
  letterInput.value = "";
}

/** Displays a random quote from the quotes array */
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>${randomQuote}</p>`;
}
/**Function that Calculates progress based on the number of correctly guessed letters*/ 
function updateProgressBar() {
  let correctGuesses = guessedName.filter((letter) => letter !== "_").length;
  let totalLetters = guessedName.length;
  let progress = (correctGuesses / totalLetters) * 100;
  progressBar.value = progress;
}

/**Function that starts a new round by resetting the game */
function startNewRound() {
  let hintIndex = names.indexOf(hiddenName.toLowerCase()); 
  updateScoreboard();
  hiddenName = getRandomName().toUpperCase();
  guessedName = createGuessedNameArray(hiddenName);
  guessedLetters = []; // Clear the guessed letters
  hintElement.textContent = "";
  wordDisplay.textContent = guessedName.join(" ");
  attemptsLeft = initialAttempts;
  attemptsLeftDisplay.textContent = attemptsLeft;
  message.innerHTML = "";
  messageGame.innerHTML = "";
  document.body.style.backgroundImage = ""; // Reset the background image
  submitLetter.disabled = false;
  progressBar.value = 0;
  title.style.display = "block";
}

/** Function to update and display correct guess count on the scoreboard*/
function updateScoreboard() {
  const scoreboardElements = document.getElementsByClassName("scoreboard");

  for (let i = 0; i < scoreboardElements.length; i++) {
    scoreboardElements[i].textContent = `Correct Guesses: ${correctGuessCount}`;
  }
}

/** Closes modal  */
function closeInstructions() {

  let modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

/** Function to set the background image */
function backgroundImage() {
  document.body.style.backgroundSize = "cover"; // Cover the entire page
  document.body.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
  document.body.style.backgroundPosition = "center"; // Center the image
}

/** Initial call needed to set game correctly on first play */
startNewRound();