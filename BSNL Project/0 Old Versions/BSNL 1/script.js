console.log("Script Started.....");

document.addEventListener('DOMContentLoaded', (event) => {
    let TelePhoneNumber = document.getElementById('TelephoneNumber');
    let SearchButton = document.getElementById('SearchButton');
    // let Details = document.getElementById('Details');
    let Address = document.getElementById('Address');
    let Number = document.getElementById('Number');
    let Description = document.getElementById('Description');

    // Details.style.display = "none";
    Description.style.display = "none";

    SearchButton.addEventListener('click', function (event) {
        console.log('Input Value :: ' + TelePhoneNumber.value);
        TelePhoneNumber = TelePhoneNumber.value + "";

        fetch(`fetch.php?telephoneNumber=${TelePhoneNumber}`)
        .then((response) => response.json())
        .then((data)=>{
            console.log("Received Data :: ",data);
            // prompt("Hi");
            if(confirm(`Is this Correct? \n\nName :: ${data[0].Name} \nAddress :: ${data[0].Address} \nMobile Number :: ${data[0].MobileNumber} \nService :: ${data[0].Service}`)){
                console.log("Details are verified...");
                Address.value = data[0].Address;
                Number.value = data[0].MobileNumber;
                Description.style.display = "block";
            } else {
                console.log("Details are Declined....");
            }

        })
    });

});
