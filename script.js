let options = [
    'Really?',
    'R u sure?',
    'Maybe change your mind?',
    'Think again!',
    'U missklicked, right?',
    'Last chance!',
    'Reconsider?',
    "Don't be so mean :(",
    'Pls',
    'You might regret!'
];

let yesbtn = document.getElementById('yesbtn');
let nobtn = document.getElementById('nobtn');
let mult = 1.4;
let i = 0;

function no() {
    console.log('No?');
    // yesbtn
    yesbtn.style.transform = 'scale(' + mult + ')';
    mult += 0.4;

    //nobtn
    nobtn.innerText = options[i];
    if (i == options.length-1) {
        i = 0;
    }else {
        i++;
    }
}