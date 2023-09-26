const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','green','blue','yellow','pink','white','black'];

body.style.backgroundColor='black';

button.addEventListener('click',changebg);

function changebg(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}