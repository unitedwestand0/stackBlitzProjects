// Import stylesheets
import './style.css';

// Write Javascript code!
const joke = document.querySelector('#joke');
const refreshBtn = document.querySelector('#refreshBtn');
const uri = 'https://icanhazdadjoke.com/';

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
  joke.innerHTML = `<h1>${this.responseText}</h1>`;
});

refreshBtn.addEventListener('click', function(){
  xhr.open('GET', uri);
  xhr.setRequestHeader('Accept', 'text/plain');
  xhr.send();
});
