let div = document.querySelector('div');

let paragraph = document.createElement('p');

let paragraphText = document.createTextNode('This is a new paragraph added from JS');

paragraph.appendChild(paragraphText);

div.appendChild(paragraph);