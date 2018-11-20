var userName = prompt('What is your name?');

var greet = function greet() {

    if (!userName) {
        userName = prompt('wHAT IS your name?');

        greet();
    }
    else {
        alert('Hello' + ' ' + userName);
    }
};

greet();