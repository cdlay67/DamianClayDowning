import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Navigo from 'navigo';
import { capitalize } from 'lodash';


var router = new Navigo(window.location.origin);

var State = {
    'active': 'Home',

    'Home': {
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

function handleNavigation(params) {

    State.active = capitalize(params.page);

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

    router.updatePageLinks();
}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({'page': 'Home'}))
    .resolve();