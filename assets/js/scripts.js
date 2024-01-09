// arrays and variables
const names = [
  "Albert Einstien",
  "Pablo Picasso",
  "William Shakespeare",
  "Leonardo Da Vinci",
  "Plato",
  "Fyodor Dostoevsky",
  "Vincent Van Gogh",
  "Marie Curie",
];

const hints = [
  "Physicist known for the theory of relativity",
  "Spanish painter and sculptor",
  "English playwright and poet",
  "Italian polymath",
  "Ancient Greek philosopher",
  "Russian novelist and philosopher",
  "Dutch Post-Impressionist painter",
  "Polish physicist and chemist",
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
let hiddenName = getRandomName().toUpperCase();
const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const submitLetter = document.getElementById("submitLetter");
const playAnotherRound = document.getElementById("playAnotherRound");
const progressBar = document.getElementById("progressBar");
const title = document.getElementById("title");
let message = document.getElementById("message");
let messageGame = document.getElementById("messageGame");
let attemptsLeftDisplay = document.getElementById("attemptsLeft");
let guessedName = createGuessedNameArray(hiddenName);
let guessedLetters = [];
let initialAttempts; 
let startButtons = document.querySelectorAll(".btn-diff");
let correctGuessCount = 0;
let attemptsLeft;
let noCigar = document.getElementById("noCigar");

// Function to hide or display the three game stages
function hideOrDisplay(element) {
  element.classList.contains("hide") ? element.classList.remove("hide")
    : element.classList.add("hide");
}
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
// Displays the hidden name as underscores
wordDisplay.textContent = guessedName.join(" ");
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
  console.log("Quit button clicked");
  
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
// Random name generator
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}
// Creates an array of underscores and spaces to display the hidden name
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


function provideHint() {
  console.log('where is the hint!');
  const hintIndex = names.indexOf(hiddenName);
  const hintElement = document.getElementById("hint");

  if (hintIndex !== -1 && hintIndex < hints.length) {
    hintElement.textContent = `Hint: ${hints[hintIndex]}`;
  }
}







// Handles the guess and displays the appropriate message
function handleGuess() {
  console.log("attemptsLeft:", attemptsLeft); 
  if (attemptsLeft === 0) {
    return;
  }
  if (attemptsLeft === 2) {
    console.log('hint function called')
     provideHint();

   }
  const letter = letterInput.value.toUpperCase();
  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    messageGame.innerHTML = `<p>You've already guessed the letter '${letter}'. Try a different one.</p>`;
  } else {
    // Add the letter to the guessed letters array
    guessedLetters.push(letter);
    if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
      messageGame.innerHTML = "<p>Please enter a single uppercase letter.</p>";
    } else if (hiddenName.includes(letter) && !guessedName.includes(letter)) {
      for (let i = 0; i < hiddenName.length; i++) {
        if (hiddenName[i] === letter) {
          guessedName[i] = letter;
          updateProgressBar(); // Call the function to update the progress bar
        }
      }
      wordDisplay.textContent = guessedName.join(" ");
      updateProgressBar(); // Call the function to update the progress bar
      
      if (!guessedName.includes("_")) {
        correctGuessCount++;
        updateScoreboard(); // Update the scoreboard when a correct guess is made
        message.innerHTML = `<p>Congratulations! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below: </p>`;
        displayRandomQuote();
        messageGame.innerHTML = `<p>Would you like to play another round?</p>`; 
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
        noCigar.innerHTML = `<p>Close but no Cigar ..... However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud</p>`;
        noCigar.innerHTML = `<p>Close but no Cigar ... the correct Thinker was '${hiddenName}'. However, as the Greatest of Freudian's once said; "From error to error, one discovers the entire truth and guessing games really are quite delightful”- Sigmund Freud</p>`;
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        title.style.display = "none";
        noCigar.style.display = "block";
      }
    }
  }
 
 
  // resetting the letterinput on every guess 
  letterInput.value = "";
  //letterInput.focus(); // i dont think this is neeeded 
}


// Displays a random quote from the quotes array
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>${randomQuote}</p>`;
}
// Function that Calculates progress based on the number of correctly guessed letters
function updateProgressBar() {
  let correctGuesses = guessedName.filter((letter) => letter !== "_").length;
  let totalLetters = guessedName.length;
  let progress = (correctGuesses / totalLetters) * 100;
  progressBar.value = progress;
}
// Function that starts a new round by resetting the game
function startNewRound() {
  updateScoreboard();
  hiddenName = getRandomName().toUpperCase();
  guessedName = createGuessedNameArray(hiddenName);
  guessedLetters = []; // Clear the guessed letters
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
// Event listener for the play another round button
playAnotherRound.addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(endGameSection);
  hideOrDisplay(gameArea);
  letterInput.focus();
});

// Function to update and display correct guess count on the scoreboard
function updateScoreboard() {
  const scoreboardElements = document.getElementsByClassName("scoreboard");

  for (let i = 0; i < scoreboardElements.length; i++) {
    scoreboardElements[i].textContent = `Correct Guesses: ${correctGuessCount}`;
  }
}

function closeInstructions() {
  
  var modal = document.getElementById("gameInstructionsModal");

  var modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}


// Function to set the background image
function backgroundImage() {
  document.body.style.backgroundSize = "cover"; // Cover the entire page
  document.body.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
  document.body.style.backgroundPosition = "center"; // Center the image
}