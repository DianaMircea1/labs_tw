// Variabile globale pentru starea jocului
let secretNumber;
let attempts = 0;
let history = [];

const inputField = document.getElementById('userInput');
const checkBtn = document.getElementById('checkBtn');
const restartBtn = document.getElementById('restartBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attemptsCount');
const historyDisplay = document.getElementById('historyList');

// Funcția de inițializare/restart joc
function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    history = [];
    
    // Resetare interfață
    inputField.value = '';
    feedback.style.display = 'none';
    feedback.classList.remove('success');
    attemptsDisplay.textContent = '0';
    historyDisplay.textContent = '';
    console.log("Secret (pt debug): " + secretNumber); // Opțional
}

// Funcția de verificare a numărului
function checkGuess() {
    const userValue = inputField.value;
    const guess = parseInt(userValue);

    // Tratarea erorilor (Validare)
    if (userValue === "" || isNaN(guess)) {
        alert("Te rugăm să introduci un număr valid!");
        return;
    }
    if (guess < 1 || guess > 100) {
        alert("Introdu un număr între 1 și 100!");
        return;
    }

    // Incrementare încercări și adăugare în istoric
    attempts++;
    history.push(guess);
    
    // Actualizare UI
    attemptsDisplay.textContent = attempts;
    historyDisplay.textContent = history.join(', ');
    feedback.style.display = 'flex';

    // Logica de comparare
    if (guess < secretNumber) {
        feedback.classList.remove('success');
        feedback.innerHTML = "Numărul este mai mare";
    } else if (guess > secretNumber) {
        feedback.classList.remove('success');
        feedback.innerHTML = "Numărul este mai mic";
    } else {
        feedback.classList.add('success');
        feedback.innerHTML = `Ai ghicit în ${attempts} încercări!`;
    }
}

// Evenimente
checkBtn.addEventListener('click', checkGuess);

restartBtn.addEventListener('click', initGame);

// Permite apăsarea tastei Enter pentru a ghici
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});

// Pornim jocul la încărcarea paginii
window.onload = initGame;