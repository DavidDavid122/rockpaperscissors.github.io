let [computer_score,user_score] = [0,0];
let result_href = document.getElementById("result");
let choice_object = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win',
        'paper' : 'lose'
    },
    'scissors' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw'
    },
}

function checker(input) {
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("computer_choice").innerHTML = ` Computer choose: <span>${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = ` You choose: <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choice_object[input][computer_choice]) {
        case 'win' : result_href.style.cssText = "background-color: rgb(100, 231, 111); color: #689f38"; 
        result_href.innerHTML = "You Win";
        user_score++;
        break;
        case 'lose' : result_href.style.cssText = "background-color: #ffdde0; color: #d32f2f";  
        result_href.innerHTML = "You Lose";
        computer_score++;
        break;
        default : result_href.style.cssText = "background-color: rgb(211, 207, 191); color: #808080"; 
        result_href.innerHTML = "Draw";
        break;
    }
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}