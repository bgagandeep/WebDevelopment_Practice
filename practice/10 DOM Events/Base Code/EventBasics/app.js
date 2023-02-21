const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('you clicked me')
    console.log('i hope it worked')
}

function scream(){
    console.log('aaaaaaahhhhhh!')
    console.log('stop touching me')
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = function(){
    alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click',function() {
    alert('clicked')
})

function twist(){
    console.log('twist')
}

function shout(){
    console.log('shout')
}

const tasButton = document.querySelector('#tas')

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click',twist)
tasButton.addEventListener('click',shout)