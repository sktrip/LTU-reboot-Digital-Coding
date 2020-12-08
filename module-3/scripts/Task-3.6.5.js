
let name = document.getElementById('user_name');
var btn = document.getElementById('button1');

btn.addEventListener('click', function(event) {
    
    console.log('Hello ' + name.value);
})
