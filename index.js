// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const uri = 'https://icanhazdadjoke.com/';

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
  app.innerHTML = `<h1>${this.responseText}</h1>`;
});

xhr.open('GET', uri);
xhr.setRequestHeader('Accept', 'text/plain');
xhr.send();