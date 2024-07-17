console.log("Script Stared....");
let randomly_Generated_Number = Math.floor(Math.random() * 1000);
console.log("Randomly Generated number ::",randomly_Generated_Number);
let TotalAttempt = 0;
document.addEventListener('DOMContentLoaded', (event) => {
    let notice = document.getElementById("Notice");
    let TotalAttemptElement = document.getElementById("TotalAttemptElement");

    // we can use change or input method
    // document.getElementById('myNumber').addEventListener('input', function(event) {
    document.getElementById('GuesedNumber').addEventListener('change', function(event) {
        console.log('Input Value :: ' + event.target.value);
        verifyInput(event.target.value);
    });

    function verifyInput(value) {
        increseAttemp();
        console.log('Verifing Number :: ' + value);
        if(randomly_Generated_Number == value){
            notice.textContent = "You Guessed it right.";
            notice.classList.add('GreenBG');
            document.getElementById('GuesedNumber').disabled = true;
        } else if (randomly_Generated_Number < value){
            notice.textContent = "Guess a Smaller number";
        } else if (randomly_Generated_Number > value){
            notice.textContent = "Guess a Larger number";
        }
    }

    function increseAttemp() {
        TotalAttempt++;
        TotalAttemptElement.textContent = "Total Attempt till now :: "+TotalAttempt;
    }
});
