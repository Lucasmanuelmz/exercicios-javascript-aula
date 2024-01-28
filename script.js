const container= document.querySelector('.container');
const paragraph = document.createElement('p');
paragraph.textContent= "Hey, I'm red";
container.appendChild(paragraph);
paragraph.style.cssText = 'color: red!;';

const h3 = document.createElement('h3');
h3.textContent = 'I’m a blue h3!';
container.appendChild(h3);
h3.style.cssText = 'color: blue;';

const div = document.createElement('div');
container.appendChild(div);
div.style.cssText = 'background-color: #ffcbdb; border: solid 1px;';

const h1 = document.createElement('h1');
h1.textContent = 'I`m in an div';
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
//div.parentNode.appendChild(p2);
div.appendChild(p2);