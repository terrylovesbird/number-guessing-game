console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNumber = 0;
const pickRandomNumber = () => {
  randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
  return randomNumber
}

document.getElementById('submit-button').onclick = () => {
  let userNumber = document.getElementById('input-number').value;
  document.getElementById('input-number').value = '';
  addNumberToList(userNumber)
  return checkNumber(+userNumber);
}

const checkNumber = (number) => {
  if (number === randomNumber) {

    document.getElementById('game-message').innerHTML = 'You won!'
    document.body.style.backgroundImage = "url('https://media.gettyimages.com/vectors/woohoo-team-work-celebration-surprise-party-event-balloons-hands-up-vector-id1181734492?s=2048x2048')"
    document.getElementById('number-list').lastChild.style.fontSize = '80px'
    document.getElementById('number-list').lastChild.style.backgroundColor = 'red'
    document.getElementById('number-list').lastChild.style.color = 'white'
  } else if (number > randomNumber) {
    document.getElementById('game-message').innerHTML = 'Guess a lower number.'
  } else {
    document.getElementById('game-message').innerHTML = 'Guess a higher number.'
  }
}

const addNumberToList = (number) => {
  let newElem = document.createElement("LI"); //li
  const numText = document.createTextNode(number);
  newElem.appendChild(numText); //put number into li

  const numList = document.getElementById("number-list"); //ol
  numList.appendChild(newElem); //put li into ol
}

pickRandomNumber();

// --------- LOCAL STORAGE ------- //
const doesUserExist = () => {
  if (localStorage.getItem('user-name')) { //if user-name not null
    let userName = localStorage.getItem('user-name');
    document.getElementById('welcome').innerHTML = `Welcome ${userName}!`;
    return document.getElementById('get-username').remove(); //'get-username' area disappear
  }
}

document.getElementById('submit-username').onclick = () => { //button onclick function
  const userName = document.getElementById('user-name').value;
  if (userName.length > 0) {
    localStorage.setItem('user-name', document.getElementById('user-name').value); //setItem
    return doesUserExist();
  }
}

doesUserExist();