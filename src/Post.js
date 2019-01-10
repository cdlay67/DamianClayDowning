import {html} from 'lit-html';

export default function Post(post) {
    return html`
    <div class="post">
    <h1>${post.id}</h1>
    <h2>${post.title}</h2>
    <p>${post.title}</p>
    </div>
    `;
}