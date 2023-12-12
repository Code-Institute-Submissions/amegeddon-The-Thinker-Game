// arrays and let variables
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
const startBtn = document.getElementsByClassName("btn-diff");
const difficultySelect = document.getElementById("difficulty");
let hiddenName = getRandomName().toUpperCase();
const wordDisplay = document.getElementById("wordDisplay");
const letterInput = document.getElementById("letterInput");
const submitLetter = document.getElementById("submitLetter");
const playAnotherRound = document.getElementById("playAnotherRound");
const progressBar = document.getElementById("progressBar");
const quitButton = document.getElementById("quit");
let message = document.getElementById("message");
let messageGame = document.getElementById("messageGame");
let attemptsLeftDisplay = document.getElementById("attemptsLeft");
let guessedName = createGuessedNameArray(hiddenName);
// guessedLetters is an array that will hold the letters the user has guessed.
let guessedLetters = [];
let initialAttempts; // The number of attempts the user starts with 
let startButtons = document.querySelectorAll(".btn-diff");
let correctGuessCount = 0;

function hideOrDisplay(element) {
  element.classList.contains('hide')
    ? element.classList.remove('hide')
    : element.classList.add('hide');
}

for (let button of startButtons) {
  button.addEventListener("click", (event) => {
    initialAttempts = parseInt(event.target.value); // Set the initial number of attempts
    attemptsLeft = initialAttempts; 
    attemptsLeftDisplay.textContent = attemptsLeft;
    hideOrDisplay(startGameSection);
    hideOrDisplay(gameArea);
  });
}

// Displays the hidden name as underscores
wordDisplay.textContent = guessedName.join(" ");

// Event listeners Clicking the "Submit Letter" button or pressing Enter in the letter input field triggers the handleGuess function.
submitLetter.addEventListener("click", handleGuess);
// Event listeners Clicking the "Play Another Round" button triggers the handleGuess function.
letterInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

// quit button Event listener
  document.getElementById("quitGame").addEventListener("click", function () {
  startNewRound();
  alert(`Correct Guesses: ${correctGuessCount}`);
  hideOrDisplay(startGameSection); 
  //hideOrDisplay(startGameSection); //needs to be repeated or doesnt show startgamesection
 // document.body.style.backgroundImage = ""; // Reset the background image
 // message.innerHTML = ""; 
 // hiddenName = getRandomName().toUpperCase();
 // guessedName = createGuessedNameArray(hiddenName);
 // guessedLetters = [];
  //wordDisplay.textContent = guessedName.join(" ");
  //attemptsLeft = 0;
  //attemptsLeftDisplay.textContent = attemptsLeft;
});

// back button Event listener
document.getElementById("backButton").addEventListener("click", function () {
  hideOrDisplay(gameArea);
  hideOrDisplay(startGameSection); 
  messageGame.innerHTML = "";
  progressBar.value = 0;
 
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

// Handles the guess and displays the appropriate message
function handleGuess() {
  if (attemptsLeft === 0) {
    return;
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
        }
      }
      wordDisplay.textContent = guessedName.join(" ");
      updateProgressBar(); // Call the function to update the progress bar
      if (!guessedName.includes("_")) {
          correctGuessCount++;
          updateScoreboard(); // Update the scoreboard when a correct guess is made
          message.innerHTML = `<p>Congratulations O Wise One! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below: </p>`;
        displayRandomQuote();
        document.body.style.backgroundImage ="url('assets/images/eureka.webp')";
        document.body.style.backgroundSize = "cover"; // Cover the entire page
        document.body.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
        document.body.style.backgroundPosition = "center"; // Center the image
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        submitLetter.disabled = true;
        playAnotherRound.style.display = "block";
      }
    } else {
      attemptsLeft--;
      attemptsLeftDisplay.textContent = attemptsLeft;
      if (attemptsLeft === 0) {
        document.body.style.backgroundImage ="url('assets/images/freud.jpeg')";
        document.body.style.backgroundSize = "cover"; // Cover the entire page
        document.body.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
        document.body.style.backgroundPosition = "center"; // Center the image
        message.innerHTML = `<p>Close but no Cigar .... You've run out of attempts. However, as the Greatest of Freudian's once said "From error to error, one discovers the entire truth...and this guessing game really is quite delightful”- Sigmund Freud</p>`;
        hideOrDisplay(gameArea);
        hideOrDisplay(endGameSection);
        document.getElementById("endGameSection").classList.remove("hide");

      }
    }
  }
  letterInput.value = "";
  letterInput.focus();
}

// Displays a random quote from the quotes array
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  message.innerHTML += `<p>${randomQuote}</p>`;
}

function updateProgressBar() {
  // Calculate the progress based on the number of correctly guessed letters
  let correctGuesses = guessedName.filter((letter) => letter !== "_").length;
  let totalLetters = guessedName.length;
  let progress = (correctGuesses / totalLetters) * 100;

  // Update the progress bar
  let progressBar = document.getElementById("progressBar");
  progressBar.value = progress;
}


  function startNewRound (){
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
  progressBar.value = 0
  }

  playAnotherRound.addEventListener("click", function () {
  startNewRound();
  hideOrDisplay(endGameSection);
  hideOrDisplay(gameArea);
}); 

  
  


document.getElementById("quitGame").addEventListener("click", function () {
  hideOrDisplay(endGameSection);
  hideOrDisplay(startGameSection);
  document.body.style.backgroundImage = ""; // Reset the background image
  message.innerHTML = "";
  progressBar.value = 0;
  
  // Increment correctGuessCount when quitting - this can be deleted as being perfromed above 
  if (!guessedName.includes("_")) {
    correctGuessCount++;
  }

  // Reset game state
  hiddenName = getRandomName().toUpperCase();
  guessedName = createGuessedNameArray(hiddenName);
  guessedLetters = [];
  wordDisplay.textContent = guessedName.join(" ");
  attemptsLeft = 0;
  attemptsLeftDisplay.textContent = attemptsLeft;

  // Update and display correct guess count on the scoreboard
  updateScoreboard();
});

// Function to update and display correct guess count on the scoreboard
function updateScoreboard() {
  const scoreboardElement = document.getElementById("scoreboard");
  scoreboardElement.textContent = `Correct Guesses: ${correctGuessCount}`;
}
