import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import Navigo from 'navigo';
import { capitalize } from 'lodash';
import Store from './src/Store';
import { html, render } from 'lit-html';


var router = new Navigo(window.location.origin);

var State = {
    'posts': [],

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

var store = new Store(State);

var root = document.querySelector('#root');

function handleNavigation(params) {
    store.dispatch((state) => {
        state.active = params.page;

        return state;
    });
}

function App(state) {
    return html`
    ${ Navigation(state) }
    ${ Header(state) }
    ${ Content(state) }
    ${ Footer(state) }
    `;
}

function start(state) {
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        store.dispatch((state) => {
            state.posts = posts;

            render(state);
        });
    });