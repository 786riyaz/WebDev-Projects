console.log("Complain Booking Script Started .....");

document.addEventListener('DOMContentLoaded', (event) => {
    let circuit_id = document.getElementById('circuit_id');
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
            console.log("Same Address Checked - set same address");
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
        circuit_id = document.getElementById('circuit_id');
        console.log('Input Field :: ' + circuit_id);
        console.log('Input Value :: ' + circuit_id.value);
        circuit_id = circuit_id.value + "";

        if (true) {
            fetch(`../Php/circuit_details_fetch.php?circuit_id=${circuit_id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Received Data :: ", data);

                    if (data.length > 0) {
                        console.log("Record(s) Found");
                        console.log("Resolved ??? ", data[0].Is_Resolved);
                        if (data[0].Is_Resolved == 0) {
                            Address.value = data[0].Address_A;
                            Number.value = data[0].Contect;
                            CurrentAddress.value = data[0].Address_A;
                            CurrentNumber.value = data[0].Contect;

                            console.log("Complain is already in progress with ID " + data[0].Complain_ID);
                            AlreadyBooked.innerHTML = "Complain is already in progress with ID " + data[0].Complain_ID;
                            AlreadyBooked.style.display = "block";

                            HideSubmissionController();
                        } else {
                            if (confirm(`Is this Correct? \n\nName :: ${data[0].Name} \nAddress :: ${data[0].Address_A} \nMobile Number :: ${data[0].Contect} \nExchange :: ${data[0].Exchange}`)) {
                                console.log("Details are verified...");
                                Address.value = data[0].Address_A;
                                Number.value = data[0].Contect;
                                CurrentAddress.value = data[0].Address_A;
                                CurrentNumber.value = data[0].Contect;
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
        }
    });

    $(document).ready(function () {
        $('#sheetdb-form').on('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            $.ajax({
                type: 'POST',
                url: '../Php/complain_register.php', // Your PHP file that handles the submission
                data: $(this).serialize(), // Serialize the form data
                success: function (response) {
                    $('#AlreadyBooked').text(response); // Display the response message
                    $('#sheetdb-form')[0].reset(); // Reset the form fields
                },
                error: function () {
                    $('#AlreadyBooked').text('An error occurred while submitting the form.');
                }
            });
            console.log("Complain Booked");
            AlreadyBooked.style.display = "block";

        });
    });

    showHide(true);

});
