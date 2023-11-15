// arrays and let variables
    const names = ["Albert Einstien", "Pablo Picasso", "William Shakespeare", "Leonardo Da Vinci", "Plato", "Fyodor Dostoevsky", "Vincent Van ogh", "marie curie"];
    const quotes = [
      "The only source of knowledge is experience. - Albert Einstein",
      "Every artist was first an amateur. - Ralph Waldo Emerson",
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
      "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
      "All the world's a stage, and all the men and women merely players. - William Shakespeare"
    ];
    const gameArea = document.getElementById("game");
    const difficultySelect = document.getElementById("difficulty");
    let hiddenName = getRandomName().toUpperCase();
    let wordDisplay = document.getElementById("wordDisplay");
    let letterInput = document.getElementById("letterInput");
    let submitLetter = document.getElementById("submitLetter");
    let playAnotherRound = document.getElementById("playAnotherRound");
    let message = document.getElementById("message");
    let attemptsLeftDisplay = document.getElementById("attemptsLeft");
    let attemptsLeft = 6;
    let guessedName = createGuessedNameArray(hiddenName);
// guessedLetters is an array that will hold the letters the user has guessed.
    let guessedLetters = [];    


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

    // Event listeners Clicking the "Play Another Round" button triggers the handleGuess function.
    playAnotherRound.addEventListener("click", function () {
      hiddenName = getRandomName().toUpperCase();
      guessedName = createGuessedNameArray(hiddenName);
      wordDisplay.textContent = guessedName.join(" ");
      attemptsLeft = 6;
      attemptsLeftDisplay.textContent = attemptsLeft;
      submitLetter.disabled = false;
      playAnotherRound.style.display = "none";
      message.innerHTML = "";
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
        } else {
          const letter = letterInput.value.toUpperCase();
          // Check if the letter has already been guessed
          if (guessedLetters.includes(letter)) {
            message.innerHTML = `<p>You've already guessed the letter '${letter}'. Try a different one.</p>`;
          } else {
            // Add the letter to the guessed letters array
            guessedLetters.push(letter);
            if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
              message.innerHTML = "<p>Please enter a single uppercase letter.</p>";
            } else if (hiddenName.includes(letter) && !guessedName.includes(letter)) {
              for (let i = 0; i < hiddenName.length; i++) {
                if (hiddenName[i] === letter) {
                  guessedName[i] = letter;
                }
              }
              wordDisplay.textContent = guessedName.join(" ");
              updateProgressBar(); // Call the function to update the progress bar
              // this looks like a repeat but if deleted game starts working
              if (!guessedName.includes("_")) {
                message.innerHTML = `<p>Congratulations O Wise One! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below: </p>`;
                displayRandomQuote();
                if (!guessedName.includes("_")) {
                    message.innerHTML = `<p>'Congratulations O Wise One! You've guessed our Great Thinker and greatness is yours! Please find your wisdom winnings below:</p>`;
                    displayRandomQuote();
                    // Append an image to the message container
                    let congratulationsImage = document.createElement('img');
                    congratulationsImage.src = 'assets/images/eureka.webp'; // Replace with the path to your image
                    congratulationsImage.alt = 'Congratulations!';
                    message.appendChild(congratulationsImage);
                    submitLetter.disabled = true;
                    playAnotherRound.style.display = "block";
                  }
                submitLetter.disabled = true;
                playAnotherRound.style.display = "block";
              }
            } else {
              attemptsLeft--;
              attemptsLeftDisplay.textContent = attemptsLeft;
              if (attemptsLeft === 0) {
                message.innerHTML = `<p>O heck .... You've run out of attempts. The correct Thinker was'${hiddenName}'.</p>`;
                submitLetter.disabled = true;
                playAnotherRound.style.display = "block";
              } else {
                message.innerHTML = `<p>The letter '${letter}' is not in the name. Please try again.</p>`;
              }
            }
          }
          letterInput.value = "";
          letterInput.focus();
        }
      }
      

// Displays a random quote from the quotes array    
    function displayRandomQuote() {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      message.innerHTML += `<p>${randomQuote}</p>`;
    }
  
    function updateProgressBar() {
 // Calculate the progress based on the number of correctly guessed letters
        let correctGuesses = guessedName.filter(letter => letter !== '_').length;
        let totalLetters = guessedName.length;
        let progress = (correctGuesses / totalLetters) * 100;
    
 // Update the progress bar
        let progressBar = document.getElementById('progressBar');
        progressBar.value = progress;
    }

    playAnotherRound.addEventListener("click", function () {
      hiddenName = getRandomName().toUpperCase();
      guessedName = createGuessedNameArray(hiddenName);
      wordDisplay.textContent = guessedName.join(" ");
      attemptsLeft = 6;
      attemptsLeftDisplay.textContent = attemptsLeft;
      submitLetter.disabled = false;
      playAnotherRound.style.display = "none";
      message.innerHTML = "";
  
      // Reset the progress bar
      let progressBar = document.getElementById('progressBar');
      progressBar.value = 0;

      // Clear the guessed letters array
   guessedLetters = [];
  });
 

   