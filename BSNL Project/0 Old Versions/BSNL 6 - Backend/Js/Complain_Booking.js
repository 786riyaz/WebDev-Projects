console.log("Script Started .....");

document.addEventListener('DOMContentLoaded', (event) => {
    let TelePhoneNumber = document.getElementById('TelephoneNumber');
    let SearchButton = document.getElementById('SearchButton');
    let Address = document.getElementById('Address');
    let Number = document.getElementById('Number');

    let SameAddressCheckBox = document.getElementById('SameAddress');
    let SameAddress = true;
    let sameDetailsDiv = document.getElementById('sameDetailsDiv');

    let CurrentAddress = document.getElementById('CurrentAddress');
    let CurrentNumber = document.getElementById('CurrentNumber');

    let AlreadyBooked = document.getElementById('AlreadyBooked');

    let SubmissionController = document.getElementById('SubmissionController');
    let SubmitButton = document.getElementById('SubmitButton');
    let CancelButton = document.getElementById('CancelButton');

    AlreadyBooked.style.display = "none";

    SameAddressCheckBox.addEventListener('change', function (event) {
        console.log("Check box Checked....");
        SameAddress = event.target.checked;
        showHide(SameAddress);
    });

    showHide = function () {
        if (SameAddress) {
            console.log("Same Address Checked");
            sameDetailsDiv.style.display = "none";
        } else {
            console.log("Same Address Unchecked");
            sameDetailsDiv.style.display = "block";
        }
    }

    HideSubmissionController = function () {
        SubmissionController.style.display = "none";
    };

    SearchButton.addEventListener('click', function (event) {
        console.log('Input Value :: ' + TelePhoneNumber.value);
        TelePhoneNumber = TelePhoneNumber.value + "";

        fetch(`../Php/Customer_Details_Fetch.php?telephoneNumber=${TelePhoneNumber}`)

            .then((response) => response.json())
            .then((data) => {
                console.log("aaaa")
                console.log("Received Data :: ", data);

                if (data.length > 0) {
                    console.log("Record(s) Found");
                    console.log("Resolved ??? ", data[0].Is_Resolved);
                    if (data[0].Is_Resolved == 0) {
                        Address.value = data[0].Address;
                        Number.value = data[0].MobileNumber;
                        CurrentAddress.value = data[0].Address;
                        CurrentNumber.value = data[0].MobileNumber;

                        console.log("Complain is already in progress with ID " + data[0].Complain_ID);
                        AlreadyBooked.innerHTML = "Complain is already in progress with ID " + data[0].Complain_ID;
                        AlreadyBooked.style.display = "block";

                        HideSubmissionController();
                    } else {
                        if (confirm(`Is this Correct? \n\nName :: ${data[0].Name} \nAddress :: ${data[0].Address} \nMobile Number :: ${data[0].MobileNumber} \nService :: ${data[0].Service}`)) {
                            console.log("Details are verified...");
                            Address.value = data[0].Address;
                            Number.value = data[0].MobileNumber;
                            CurrentAddress.value = data[0].Address;
                            CurrentNumber.value = data[0].MobileNumber;
                            // Description.style.display = "block";
                        } else {
                            console.log("Details are Declined....");
                        }
                    }
                }
                else {
                    AlreadyBooked.innerHTML = "We Could not found any record with given telephone number";
                }
            })
    });

    $(document).ready(function() {
        $('#sheetdb-form').on('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            $.ajax({
                type: 'POST',
                url: '../Php/Complain_Register.php', // Your PHP file that handles the submission
                data: $(this).serialize(), // Serialize the form data
                success: function(response) {
                    $('#AlreadyBooked').text(response); // Display the response message
                    $('#sheetdb-form')[0].reset(); // Reset the form fields
                },
                error: function() {
                    $('#AlreadyBooked').text('An error occurred while submitting the form.');
                }
            });
            console.log("Complain Booked");
            AlreadyBooked.style.display = "block";

        });
    });

    showHide(true);

});
