function lock() {
    islocked = true;
    oploop()
}

function oploop() {
    while(islocked) {
        let lock = document.getElementById('lock')
        let element = document.createElement('p');
        element.innerText = 'перезагружай страницу, друг)';
        lock.append(element);
        console.log("перезагружай страницу, друг)");
    }
}