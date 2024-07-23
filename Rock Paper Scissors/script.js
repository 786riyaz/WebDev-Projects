console.log("Script Started.....");

let ComputerChoice = Math.floor(Math.random() * 1000) % 3;
console.log("Randomly Generated number ::", ComputerChoice);

if (ComputerChoice == 0) {
    ComputerChoice = "Rock";
} else if (ComputerChoice == 1) {
    ComputerChoice = "Paper";
} else if (ComputerChoice == 2) {
    ComputerChoice = "Scissors";
}
console.log("Computer Choice ::", ComputerChoice);

document.addEventListener('DOMContentLoaded', (event) => {
    let Radio_Button_Rock = document.getElementById('Rock');
    let Radio_Button_Paper = document.getElementById('Paper');
    let Radio_Button_Scissors = document.getElementById('Scissors');
    let FinalMessage = document.getElementById("FinalMessage");
    let Note = document.getElementById("Note");


    // console.log(Radio_Button_Rock);
    // console.log(Radio_Button_Paper);
    // console.log(Radio_Button_Scissors);

    // we can use change or click method
    // document.getElementById('myNumber').addEventListener('click', function(event) {
    Radio_Button_Rock.addEventListener('change', function (event) {
        console.log('Input Value :: ' + event.target.value);
        RadioButtonClicked(event.target.value);
    });
    Radio_Button_Paper.addEventListener('change', function (event) {
        console.log('Input Value :: ' + event.target.value);
        RadioButtonClicked(event.target.value);
    });
    Radio_Button_Scissors.addEventListener('change', function (event) {
        console.log('Input Value :: ' + event.target.value);
        RadioButtonClicked(event.target.value);
    });

    function RadioButtonClicked(input) {
        console.log(input + " :: Radio button clicked......");
        console.log("Computer Choice ::", ComputerChoice);

        if (input == ComputerChoice) {
            console.log("------------DRAW----------------");
            FinalMessage.textContent = "Its Draw!!!!"
            Note.textContent = "Computer Also Choosed :: " + ComputerChoice;
        } else {
            if (input == "Rock" && ComputerChoice == "Scissors") {
                console.log("------------WIN----------------");
                FinalMessage.textContent = "You Win.";
                FinalMessage.classList.add('GreenText');
            } else if (input == "Rock" && ComputerChoice == "Paper") {
                console.log("------------LOSS----------------");
                FinalMessage.textContent = "You Loss.";
                FinalMessage.classList.add('RedText');
            }

            else if (input == "Paper" && ComputerChoice == "Rock") {
                console.log("------------WIN----------------");
                FinalMessage.textContent = "You Win.";
                FinalMessage.classList.add('GreenText');
            } else if (input == "Paper" && ComputerChoice == "Scissors") {
                console.log("------------LOSS----------------");
                FinalMessage.textContent = "You Loss.";
                FinalMessage.classList.add('RedText');
            }

            else if (input == "Scissors" && ComputerChoice == "Rock") {
                console.log("------------LOSS----------------");
                FinalMessage.textContent = "You Loss.";
                FinalMessage.classList.add('RedText');
            } else if (input == "Scissors" && ComputerChoice == "Paper") {
                console.log("------------WIN----------------");
                FinalMessage.textContent = "You Win.";
                FinalMessage.classList.add('GreenText');
            }
            
            Note.innerHTML = "Computer Choosed :: <u>" + ComputerChoice + "</u>";
            // Note.textContent = "Computer Choosed :: " + ComputerChoice;
        }
    }
});
