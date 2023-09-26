let answer;
let attempts = 0;
let maxAttempts = 3;
let minNum = 1;
let maxNum = 100;

// Функция, которая загадывает число
function generateNumber() {
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

// Функция, которая проверяет предположение пользователя
function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if (guess < minNum || guess > maxNum) {
    document.getElementById("result").textContent =
      `Write number from ${minNum} to ${maxNum}`;
  } else {
    attempts += 1;
    document.getElementById("attempts").textContent = attempts;
  
    if (guess === answer) {
      document.getElementById("result").textContent =
        "You found the number!😎";
    } else if (guess < answer) {
      document.getElementById("result").textContent =
        "The secret number is greater";
    } else {
      document.getElementById("result").textContent =
        "The secret number is less";
    }
  
    if (attempts % maxAttempts === 0) {
      document.getElementById("hints").textContent =
        "Help: the number is " + (answer % 2 === 0 ? "even" : "odd");
    }
  }
}

// Функция, которая начинает новую игру
function newGame() {
  answer = generateNumber();
  attempts = 0;
  document.getElementById("guess").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("hints").textContent = "";
  document.getElementById("attempts").textContent = attempts;
}

// Инициализация новой игры при загрузке страницы
window.onload = () => {
    document.getElementById('start').addEventListener('click', () => {
        document.getElementById('game').style.display = 'flex';
        document.getElementById('start').style.display = 'none';
    })

    document.getElementById('min-num').addEventListener('change', () => {
        if (document.getElementById('min-num').value == '') {
            minNum = 1;
        } else {
            minNum = parseInt(document.getElementById('min-num').value);
        }
        // Обновляем диапазон значений игры
        newGame();
    })

    document.getElementById('max-num').addEventListener('change', () => {
        if (document.getElementById('max-num').value == '') {
            maxNum = 100;
        } else {
            maxNum = parseInt(document.getElementById('max-num').value);
        }
        // Обновляем диапазон значений игры
        newGame();
    })
    
    newGame();
    document.getElementById('check').addEventListener('click', checkGuess);
    document.getElementById('restart').addEventListener('click', newGame);
};