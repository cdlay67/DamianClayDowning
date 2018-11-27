var userName = prompt('What is your name?');
var title = document.querySelector('h1');

var greet = function greet() {

    if (!userName) {
        userName = prompt('wHAT IS your name?');

        greet();
    }
    else {
        alert('Hello' + ' ' + userName);

        title.textContent = 'Hello World' + userName;
    }
};

greet();