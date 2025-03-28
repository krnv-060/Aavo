const words = ["transaction", "report", "analytics"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust for typing speed (milliseconds per character)
const container = document.getElementById("typing-container");
const typedText = document.getElementById("typed-text");

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, typingSpeed);
  } else {
    setTimeout(deleteWord, 2000); // Pause after typing a word
  }
}

function deleteWord() {
  if (charIndex > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    charIndex--;
    setTimeout(deleteWord, typingSpeed);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0; // Start from the beginning
    }
    setTimeout(typeWord, 1000); // Pause before typing the next word
  }
}

typeWord(); // Start the typing