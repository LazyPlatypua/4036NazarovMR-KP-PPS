window.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registration-form');
    var submitButton = document.getElementById('submitButton');
    var timerElement = document.getElementById('timer');
    var startTime = new Date();

    // Функция, проверяющая, прошло ли уже 15 минут
    function checkElapsedTime() {
      var currentTime = new Date();
      var elapsedTime = currentTime - startTime;
      var remainingTime = 900000 - elapsedTime;

      if (remainingTime <= 0) {
        submitButton.disabled = false;
        timerElement.innerHTML = 'Время настало, Форму отправить можно, Успех впереди.';
      } else {
        var minutes = Math.floor(remainingTime / 60000);
        var seconds = Math.floor((remainingTime % 60000) / 1000);
        timerElement.innerHTML = 'Минуты тикают, Секунды шепчут ожиданье, форма сможет отправиться через: ' + minutes + ' мин ' + seconds + ' сек';
        setTimeout(checkElapsedTime, 1000); 
      }
    }

    
    checkElapsedTime();
    
    form.addEventListener('submit', function(event) {
      if (submitButton.disabled) {
        event.preventDefault(); 
        alert('Время тянется,\nОжидание медленно ползет,\nФорма придет скоро.');
      }
    });
  });