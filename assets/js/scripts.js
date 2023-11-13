
    const names = ["albert einstien", "pablo picasso", "william shakespeare", "leonardo da vinci", "plato", "fyodor dostoevsky", "vincent van gogh", "marie curie"];
    const quotes = [
      "The only source of knowledge is experience. - Albert Einstein",
      "Every artist was first an amateur. - Ralph Waldo Emerson",
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
      "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
      "All the world's a stage, and all the men and women merely players. - William Shakespeare"
    ];
    let hiddenName = getRandomName().toUpperCase();
    let wordDisplay = document.getElementById("wordDisplay");
    let letterInput = document.getElementById("letterInput");
    let submitLetter = document.getElementById("submitLetter");
    let playAnotherRound = document.getElementById("playAnotherRound");
    let message = document.getElementById("message");
    let attemptsLeftDisplay = document.getElementById("attemptsLeft");
    let attemptsLeft = 6;
    let guessedName = createGuessedNameArray(hiddenName);

    wordDisplay.textContent = guessedName.join(" ");

    submitLetter.addEventListener("click", handleGuess);
    letterInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        handleGuess();
      }
    });

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

    function getRandomName() {
      return names[Math.floor(Math.random() * names.length)];
    }

    function createGuessedNameArray(name) {
      return name.split('').map(char => (char === ' ' ? ' ' : '_'));
    }

    function handleGuess() {
      if (attemptsLeft === 0) {
        message.innerHTML = `<p>Darkness descends as you have run out of attempts. The Great Thinker who alluded you was '${hiddenName}'.</p>`;
        submitLetter.disabled = true;
        playAnotherRound.style.display = "block";
      } else {
        const letter = letterInput.value.toUpperCase();
        if (letter.length !== 1 || !/^[A-Z]$/.test(letter)) {
          message.innerHTML = "<p>Please enter a single uppercase letter.</p>";
        } else if (hiddenName.includes(letter) && !guessedName.includes(letter)) {
          for (let i = 0; i < hiddenName.length; i++) {
            if (hiddenName[i] === letter) {
              guessedName[i] = letter;
            }
          }
          wordDisplay.textContent = guessedName.join(" ");
          if (!guessedName.includes("_")) {
            message.innerHTML = `<p>Congratulations O Wise One! You've guessed our Great Thinker and greatness is yours!</p>`;
            displayRandomQuote();
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

    function displayRandomQuote() {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      message.innerHTML += `<p>${randomQuote}</p>`;
    }
  
