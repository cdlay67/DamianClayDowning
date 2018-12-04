export default function Navigation(state) {
    var links = state[state.active].links;
    var list = '';

    for(let i = 0; i < links.length; i++){
        list += `
            <li>
                <a href="#">${links[i]}</a>
            </li>
        `;
    }

    return `
<div id="navigation">
        <ul class="container">
           ${list}
        </ul>
    </div>
`;
}