console.log('hello world');

function button_click (event){
    console.log('button is clicked!');
    var name = prompt('whats your name?');
    var divelement = document.getElementById('result');
    divelement.innerHTML = 'Good afternoon, '+name;
}

button = document.getElementById('start');
button.onclick = button_click;


console.dir(button);    

