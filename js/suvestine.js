const scoresDOM = document.getElementsByClassName('score');
const scoreHomeDOM = (scoresDOM[0].getElementsByTagName('div'))[1];
const scoreGuestDOM = (scoresDOM[0].getElementsByTagName('div'))[3];

const buttonDOM = document.getElementsByTagName('button');
const buttonHomeDOM1 = buttonDOM[0];
const buttonHomeDOM2 = buttonDOM[1];
const buttonHomeDOM3 = buttonDOM[2];
const buttonGuestDOM1 = buttonDOM[3];
const buttonGuestDOM2 = buttonDOM[4];
const buttonGuestDOM3 = buttonDOM[5];

const statisticDOM = document.getElementsByClassName('statistic')[0];


let scoreHome = 0;
let scoreGuest = 0;


function plusOneHome() {
    scoreHome++;
    scoreHomeDOM.textContent = scoreHome;
    statisticDOM.innerHTML = '<br><b>Home:</b> +1' + statisticDOM.innerHTML;
}
function plusTwoHome() {
    scoreHome += 2;
    scoreHomeDOM.textContent = scoreHome;
    statisticDOM.innerHTML = '<br><b>Home:</b> +2' + statisticDOM.innerHTML;
}
function plusThreeHome() {
    scoreHome += 3;
    scoreHomeDOM.textContent = scoreHome;
    statisticDOM.innerHTML = '<br><b>Home:</b> +3' + statisticDOM.innerHTML;
}

function plusOneGuest() {
    scoreGuest++;
    scoreGuestDOM.textContent = scoreGuest;
    statisticDOM.innerHTML = '<br><b>Guest</b>: +1' + statisticDOM.innerHTML;
}
function plusTwoGuest() {
    scoreGuest += 2;
    scoreGuestDOM.textContent = scoreGuest;
    statisticDOM.innerHTML = '<br><b>Guest:</b> +2' + statisticDOM.innerHTML;
}
function plusThreeGuest() {
    scoreGuest += 3;
    scoreGuestDOM.textContent = scoreGuest;
    statisticDOM.innerHTML = '<br><b>Guest:</b> +3' + statisticDOM.innerHTML;
}


buttonHomeDOM1.addEventListener('click', plusOneHome);
buttonHomeDOM2.addEventListener('click', plusTwoHome);
buttonHomeDOM3.addEventListener('click', plusThreeHome);
buttonGuestDOM1.addEventListener('click', plusOneGuest);
buttonGuestDOM2.addEventListener('click', plusTwoGuest);
buttonGuestDOM3.addEventListener('click', plusThreeGuest);