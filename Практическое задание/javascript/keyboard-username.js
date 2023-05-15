document.addEventListener("DOMContentLoaded", function(event) {
  const usernameContainer = document.getElementById('username-container');
  const usernameInput = document.getElementById('username-input');
  const keyboardContainer = document.getElementById('keyboard-container');

  if (usernameContainer && usernameInput && keyboardContainer) {
    const keyboardButtons = [];


    function shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    const keyboardChars = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '_', 'Backspace' ];


    shuffle(keyboardChars);


    function updateKeyboard() {

      keyboardButtons.forEach(button => {
        if (keyboardContainer.contains(button)) {
          keyboardContainer.removeChild(button);
        }
      });

      shuffle(keyboardChars);

      keyboardChars.forEach((char, index) => {
        const button = document.createElement('button');
        button.innerText = char;
        button.type = "button";
        button.classList.add('keyboard-button');
        if(char === 'Backspace')
          {
            button.style.width = '100px';
            button.style.color = '#ff0000';
          }
        button.addEventListener('click', () => {
            if(char === 'Backspace')
            {
              usernameInput.value = usernameInput.value.slice(0, -1);
            }
            else
            {
              usernameInput.value += char;
            }
            updateKeyboard();
            console.log(char);
        });
        keyboardButtons.push(button);
        keyboardContainer.appendChild(button);
      });
    }

    updateKeyboard();
    
  }
});