// function play(){
//     // hide the home screen
//     const homeScreen=document.getElementById('home_screen');
//     homeScreen.classList.add('hidden');

//     // show the playground
//     const playGround=document.getElementById('play_ground');
//     playGround.classList.remove('hidden');

// }

function continueGame() {

    // generate a random alphabate
    const alphabate = getARandomAlphabate();

    // Display current alphabate
    const currentAlphabate=document.getElementById('current_alphabate');
    currentAlphabate.innerText=alphabate;

    addBackgroundColorById(alphabate);
}

function play() {
    hideElementById('home_screen');
    showElementById('play_ground');
    continueGame();
}