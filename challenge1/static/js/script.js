//alert('HI');
//console.log('Hello');


// challenge 1
function ageInDays(){
var birthYear = prompt('What year were you born?');
var ageInDayss = (2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1); 
//console.log(ageInDayss);
}
 
function reset(){
    document.getElementById('ageInDays').remove();
}


// challenge 2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


//challenge 3

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice', botChoice);
    results = decideWinner(humanChoice, botChoice); //[0,1] human loss, bot won
    console.log(results);
    message = finalMessage(results); // "you won" {'message' : "You won!", 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourchoice.id,botChoice, message);

}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock':0.5 , 'paper': 0},
        'rock': {'rock': 1, 'paper':0.5 , 'scissors': 0},
        'rock': {'paper': 1, 'scissors':0.5 , 'rock': 0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color' : 'red'};
    }else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color' : 'yellow'};
    }else{
        return {'message': 'You won!', 'color' : 'green'};
        
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
// remove images 
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img scr='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);>"
message.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
botDiv.innerHTML = "<img scr='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 243px 10px 50px rgba(37, 50, 233, 1);>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge Four: Change color of all buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons.length[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }else if (buttonThingy.value === 'reset'){
        buttonsReset();
    }else if (buttonThingy.value === 'randon'){
        randomColors();
    } 
}

function buttonsRed(){
    for ( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for ( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset(){
    for ( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices=['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i< all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random()* 4);
        all_buttons[i].classList.remove(allButtons[i].classList[i]);
        all_buttons[i].classList.add(choices[randomeNumber]);
    }
    }


    // challenge 5 

    let blackjackGame = {
        'you': {'scoreSpan': '#your-blackjack-result','div': '#your-box', 'score':0},
        'dealer': {'scoreSpan': '#dealer-blackjack-result','div': '#dealer-box', 'score':0},
        'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'A'],
        'cardsMap':{'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10':10, 'K': 10, 'J':10, 'Q':10, 'A':[1,11]},
        'wins':0,
        'losses':0,
        'draws':0
    };

    const YOU= blackjackGame['you'];
    const DEALER= blackjackGame['dealer'];

    const hitSound = new Audio('static/sounds/swish.m4a');
    const winSound = new Audio('static/sounds/cash.m4a');
    const lossSound = new Audio('static/sounds/aww.m4a');

    document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

    document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
    
    document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

    function blackjackHit(){
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
        // showCard(DEALER);
    }

    function randomCard(){
        let randomIndex = Math.floor(Math.random()* 13);
        return blackjackGame['cards'][randomIndex];
    }

    function showCard(card, activePlayer){
               // alert('Ouch, you just clicked me!');
               if(activePlayer['score'] <=21){}               let cardImage = document.createElement('img');
               cardImage.src = `static/images/${card}.png`;
               document.querySelector(activePlayer['div']).appendChild(cardImage);
              hitSounds.play();
    }

    function blackjackDeal(){
        // showResult(computerWinner());
       
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        console.log(yourImages);
        // yourImages[0].remove();
        for (i=0; i< yourImages.length; i++){
            yourImages[i].remove();
        }
        for (i=0; i< dealerImages.length; i++){
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#FFFFFF';
        document.querySelector('#dealer-blackjack-result').style.color = '#FFFFFF';
    }

    function updateScore(card, activePlayer){
        if(card === 'A'){
        //If adding 111 keeps me below 21, add 11 . Otherwise, add 1 
        if(activePlayer['score']+ blackjackGame['cardsMap'][card] <= 21){
        activePlayer['score']+= blackjackGame['cardsMap'][card][1];

        } else{
            activePlayer['score']+= blackjackGame['cardsMap'][card][0]
        }
    }else{
        activePlayer['score']+= blackjackGame['cardsMap'][card];
    }
}

    function showScore(activePlayer){
        if(activePlayer['score'] > 21){
            document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
            document.querySelector(activePlayer['scoreSpan']).stylecolor = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer;

    }
}

function dealerLogic(){
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);

    if (DEALER['score'] > 15){
        let winner = computerWinner();
        showResult(winner);
    }
}

function computerWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['wins']++;
            console.log('You won!');
            winner = YOU;
        }else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;

            console.log('You lost!');
            winner = DEALER;

        }else if (YOU['score'] === DEALER['score']){
            console.log('It is a tie');
            blackjackGame['ties']++;

        }
    // condition: when user busts but dealer does not
    } else if (YOU['score'] > 21 && DEALER['score'] <=21){
        console.log('You lost!');
        blackjackGame['losses']++;
        winner = DEALER;


        winner = DEALER;
    }else if (YOU ['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['ties']++;

        console.log('It is a tie');
    }
    console.log('Winner is ', winner);
    return winner;
}

function showResult(winner){
    let message, messageColor;

        if(winner === YOU){
            message = 'You won!';
            messageColor = 'green';
            winSound.play()
        }else if (winner === DEALER){
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }else {
            message = 'Tie!';
            messageColor = 'yellow';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }