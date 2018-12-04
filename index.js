import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';

var State = {
    'active': 'home',

    'home': {
        'title': 'Hello Bloggggggg!!!!',
        'links': ['Blog', 'Contact', 'Projects']
    },

    'Blog': {
        'title': 'Read my blog',
        'links': ['Home', 'Contact', 'Projects']
    },

    'Contact': {
        'title': 'any questions or concenrs',
        'links': ['Home', 'Blog', 'Projects']
    },

    'Projects': {
        'title': 'what do you want to know',
        'links': ['Home', 'Blog', 'Contact']
    },

    'Events': {
        'title': 'what do you want to know',
        'links': ['Home', 'Contact', 'Projects']
    }
};

var root = document.querySelector('#root');

function handleNavigation(event) {
    event.preventDefault();

    State.active = event.target.textContent;

    render(State);//eslint disable line
}


function render(state) {
    var links;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
`;

    greet();

    links = document.querySelectorAll('#navigation a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleNavigation);

    }
}

render(State);