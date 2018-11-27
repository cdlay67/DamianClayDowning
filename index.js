import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

document.querySelector('#root').innerHTML = `
${Navigation}
${Header}
${Content}
${Footer}
`;