import {html} from 'lit-html';

export default function Header(state) {
    return html`
<div id="header">
<div class="container">
    <h1>${state[state.active].title}</h1>
    <h3>Damian Clay-Downing</h3>
</div>

</div>
`;
}