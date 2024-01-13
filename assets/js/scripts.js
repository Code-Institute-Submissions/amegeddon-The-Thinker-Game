// arrays and variables

const names = [
  "plato",
  "aristotle",
  "confucius",
  "thomas aquinas",
  "immanuel kant",
  "john locke",
  "jean jacques rousseau",
  "socrates",
  "friedrich nietzsche",
  "karl marx",
  "john stuart mill",
  "thomas hobbes",
  "søren kierkegaard",
  "friedrich engels",
  "jean-paul sartre",
  "blaise pascal",
  "epicurus",
  "laozi",
  "john dewey",
  "albert camus",
  "arthur schopenhauer",
  "thales",
  "plutarch",
  "michel foucault",
  "william james",
  "simone de beauvoir",
  "niccolò machiavelli",
  "george berkeley",
  "karl popper",
  "bertrand russell",
  "al-farabi",
  "edmund burke",
  "willard quine",
  "simone weil",
  "martin heidegger",
  "rudolf carnap",
  "avempace",
  "avicenna",
  "gottfried leibniz",
  "john rawls",
];

const hints = [
  "Ancient Greek philosopher, founder of the Academy, and student of Socrates.",
  "Greek philosopher, student of Plato, and tutor to Alexander the Great.",
  "Chinese philosopher, founder of Confucianism, and proponent of ethical conduct.",
  "Catholic theologian and philosopher, known for the synthesis of faith and reason.",
  "German philosopher, central figure in modern philosophy, and proponent of transcendental idealism.",
  "English philosopher, influential in the Enlightenment, and advocate of social contract theory.",
  "French philosopher, political theorist, and author of 'The Social Contract.'",
  "Ancient Greek philosopher, teacher of Plato, and known for the Socratic method.",
  "German philosopher, critic of religion and morality, and author of 'Thus Spoke Zarathustra.'",
  "German philosopher, economist, and co-author of 'The Communist Manifesto.'",
  "British philosopher, economist, and advocate of utilitarianism.",
  "English philosopher, key figure in political philosophy, and author of 'Leviathan.'",
  "Danish philosopher, theologian, and critic of organized religion.",
  "German philosopher, political theorist, and co-author of 'The Communist Manifesto.'",
  "French philosopher, key figure in existentialism, and author of 'Being and Nothingness.'",
  "French mathematician, physicist, and philosopher, known for Pascal's Wager.",
  "Ancient Greek philosopher, founder of Epicureanism, and advocate of pleasure.",
  "Chinese philosopher, founder of Taoism, and proponent of natural living.",
  "American philosopher, psychologist, and educator, central figure in pragmatism.",
  "French philosopher, novelist, and key figure in existentialism.",
  "German philosopher, pessimist, and author of 'The World as Will and Representation.'",
  "Ancient Greek philosopher, pre-Socratic thinker, and known for the concept of water as the fundamental substance.",
  "Greek historian, biographer, and essayist, known for 'Parallel Lives.'",
  "French philosopher, social theorist, and critic of modern institutions.",
  "American philosopher and psychologist, influential in pragmatism.",
  "French existentialist philosopher, feminist, and author of 'The Second Sex.'",
  "Italian political philosopher, author of 'The Prince,' and influential in political theory.",
  "Irish philosopher, empiricist, and bishop, known for 'Berkeley's Idealism.'",
  "Austrian-British philosopher, philosopher of science, and critic of verificationism.",
  "British philosopher, logician, and advocate for logical empiricism.",
  "Islamic philosopher, founder of Islamic Neoplatonism, and known for political philosophy.",
  "Scottish philosopher, key figure in the Scottish Enlightenment, and advocate of empiricism.",
  "Irish statesman, philosopher, and author of 'A Treatise on Human Nature.'",
  "French philosopher, mystic, and author of 'Gravity and Grace,' known for spirituality.",
  "German philosopher, mathematician, and founder of phenomenology.",
  "Austrian-British philosopher, logical positivist, and co-founder of the Vienna Circle.",
  "Spanish-Arab philosopher, physician, and polymath, known for contributions to medicine and philosophy.",
  "Persian philosopher, polymath, and author of 'The Book of Healing.'",
  "German philosopher, mathematician, and rationalist, known for Leibniz's Law.",
  "American philosopher, political theorist, and author of 'A Theory of Justice.'",
];

const quotes = [
  "The only source of knowledge is experience. - Albert Einstein",
  "Every artist was first an amateur. - Ralph Waldo Emerson",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  "All the world's a stage, and all the men and women merely players. - William Shakespeare",
  "In the beginning, God created the heavens and the earth. - The Bible",
  "I think, therefore I am. - René Descartes",
  "The unexamined life is not worth living. - Socrates",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "Cogito, ergo sum. (I think, therefore I am.) - René Descartes",
  "The mind is everything. What you think, you become. - Buddha",
  "Knowledge speaks, but wisdom listens. - Jimi Hendrix",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "He who is not a good servant will not be a good master. - Plato",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "The more I read, the more I acquire, the more certain I am that I know nothing. - Voltaire",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "It is not what happens to you, but how you react to it that matters. - Epictetus",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The purpose of our lives is to add value to the people of this generation and those that follow. - Buckminster Fuller",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Knowing yourself is the beginning of all wisdom. - Aristotle",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The best revenge is to be unlike him who performed the injustice. - Marcus Aurelius",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Whatever you are, be a good one. - Abraham Lincoln",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "Don't cry because it's over, smile because it happened. - Dr. Seuss",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
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
  const hintIndex = names.indexOf(hiddenName.toLowerCase());


  if (hintIndex !== -1 && hintIndex < hints.length) {
    hintElement.textContent = `Hint: ${hints[hintIndex]}`;
  }
}

/** Handles the guess and displays the appropiate message */
function handleGuess() {
   
  if (attemptsLeft === 0) {
    return;
  }
  if (attemptsLeft === 2) {
     provideHint();
   }
  
   const letter = letterInput.value.toUpperCase(); // Needs to be called here
  
  if (guessedLetters.includes(letter)) {
    messageGame.innerHTML = `<p>You've already guessed the letter '${letter}'. Try a different one.</p>`;
  } else {
    
    guessedLetters.push(letter);
    if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
      messageGame.innerHTML = "<p>Please enter a single letter.</p>";
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