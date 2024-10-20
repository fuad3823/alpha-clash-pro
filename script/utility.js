function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabate() {

    //    get or create alphabate
    const alphabatesString = 'asdfghjklqwertyuiopzxcvbnm';
    const alphabates = alphabatesString.split('');


    // get random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    // match random number with alphabate
    const alphabate=alphabates[index];
    return alphabate;

}


function addBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-amber-400');

}