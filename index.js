import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';

var state = {'title': 'Hello Bloggggggg!!!!'};

document.querySelector('#root').innerHTML = `
${Navigation()}
${Header(state)}
${Content()}
${Footer()}
`;

greet();