var randomNumber = generateRandomNumber(1, 10);
    var attempts = 0;
  
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function checkGuess() {
      var guessInput = document.getElementById('guess-input');
      var resultDiv = document.getElementById('result');
      var guess = parseInt(guessInput.value);
      
      if (isNaN(guess) || guess < 1 || guess > 10) {
        resultDiv.textContent = 'Числа играют в танце, От 1 до 10 выбери, Угадай, волшебник.';
      } else {
        attempts++;
        
        if (guess === randomNumber) {
          resultDiv.textContent = 'Вселенское везенье, Число знаменито - ты попал, Угадал с ' + attempts + ' попытки.';
          guessInput.disabled = true;
          gameCompleted();
        } else if (guess < randomNumber) {
          resultDiv.textContent = 'Ты ищешь ответ, Загаданное число, Больше, чем думаешь.';
        } else {
          resultDiv.textContent = 'Судьбы число мало, Загаданное скрывает, Пробуй еще раз.';
        }
      }
    }

    function unlockRaceSelection() {
        var raceSelect = document.getElementById('user_class');
        raceSelect.removeAttribute('disabled');
        raceSelect.style.pointerEvents = 'auto';
        raceSelect.style.opacity = 1;
      }
      
      function gameCompleted() {
        unlockRaceSelection();
        alert('Игра пройдена, Расы теперь открыты, Выбор настал.');
      }