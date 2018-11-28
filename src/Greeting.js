var userName = prompt('What is your name?') || anomo;

export default function greet(){
    var title = document.querySelector('h1');

    if (!userName) {
        userName = prompt('wHAT IS your name?');

        greet();
    }
    else {
        title.innerHTML += `, ${userName}`;
    }
};