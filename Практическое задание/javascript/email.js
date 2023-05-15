function randomizeEmailInput() {
    let emailInput = document.getElementById("email");
    let currentInput = emailInput.value;

    if (currentInput.length > 0) {
        let randomizedInput = "";

        for (let i = 0; i < currentInput.length; i++) {
            let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            randomizedInput += randomChar;
        }

        emailInput.value = randomizedInput;
    }
}