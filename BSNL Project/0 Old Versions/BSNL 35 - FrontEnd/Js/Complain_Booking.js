console.log("Complain Booking Script Started...");
let DebugMode = true;

let ReceivedData = [];

// console.log("pending count.....")

let setCountInUI = function () {
    let pendingCount = 0, completeCount = 0;
    for (let i = 0; i < TempRecords.length; i++) {
        if (TempRecords[i].Is_Resolved == "0") { pendingCount++; }
    }
    document.getElementById("PendingFaults").innerText = pendingCount;

    // console.log(TempRecords)
}

let FetchComplainRecords = function () {
    fetch(`../Php/home.php`)
        .then((response) => response.json())
        .then((data) => {
            // console.log("Received Data :: ", data);
            DatabaseRecords = data;
            TempRecords = data;
            setCountInUI();
        })
}
FetchComplainRecords();

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
        // console.log("Check box Checked....");
        SameAddress = event.target.checked;
        showHide(SameAddress);
    });

    showHide = function () {
        if (SameAddress) {
            // console.log("Same Address Checked - set same address");
            sameDetailsDiv.style.display = "none";
        } else {
            // console.log("Same Address Unchecked");
            sameDetailsDiv.style.display = "block";
        }
    }

    HideSubmissionController = function () {
        SubmissionController.style.display = "none";
    };

    SearchButton.addEventListener('click', function (event) {
        circuit_id = document.getElementById('circuit_id');
        // console.log('Input Field :: ' + circuit_id);
        // console.log('Input Value :: ' + circuit_id.value);
        circuit_id = circuit_id.value + "";

        if (true) {
            // fetch only customer details first
            fetch(`../Php/Complain_User_Data_Fetch.php?circuit_id=${circuit_id}`)
                .then((response) => response.json())
                .then((data) => {
                    if (DebugMode) { console.log("Received Data :: ", data); }
                    ReceivedData = data[0];
                    if (DebugMode) { console.log("Received Data :: ", ReceivedData); }
                    if (data.length > 0) {
                        // console.log("Customer Details Found");
                        if (confirm(`Is this Correct? \n\nName :: ${data[0].Name} \nAddress :: ${data[0].Address_A} \nMobile Number :: ${data[0].Contect} \nExchange :: ${data[0].Exchange}`)) {
                            // console.log("Details are verified...");
                            Address.value = data[0].Address_A;
                            Number.value = data[0].Contect;
                            CurrentAddress.value = data[0].Address_A;
                            CurrentNumber.value = data[0].Contect;

                            fetch(`../Php/Circuit_And_Complain_Fetching.php?circuit_id=${circuit_id}`)
                                .then((response) => response.json())
                                .then((data) => {
                                    console.log("Received Data :: ", data);

                                    if (data.length > 0) {
                                        // console.log("Record(s) Found");
                                        // console.log("Resolved ??? ", data[0].Is_Resolved);
                                        Address.value = data[0].Address_A;
                                        Number.value = data[0].Contect;
                                        CurrentAddress.value = data[0].Address_A;
                                        CurrentNumber.value = data[0].Contect;
                                        // console.log("Complain is already in progress with ID " + data[0].complain_id);
                                        AlreadyBooked.innerHTML = "Complain is already in progress with ID " + data[0].complain_id;
                                        AlreadyBooked.style.display = "block";
                                        HideSubmissionController();
                                    }
                                    else {
                                        // AlreadyBooked.innerHTML = "You can book your complain now.";
                                        // console.log("You can book your complain now");
                                        SubmissionController.style.display = "";
                                        AlreadyBooked.style.display = "none";

                                    }
                                })
                        } else {
                            console.log("Details are Declined....");
                        }
                    }
                    else {
                        AlreadyBooked.innerHTML = "We Could not found any record with given telephone number";
                    }
                })

            if (false) {
                fetch(`../Php/Circuit_And_Complain_Fetching.php?circuit_id=${circuit_id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Received Data :: ", data);
                        ReceivedData = data[0];
                        // ReceivedData = data[0];

                        if (data.length > 0) {
                            console.log("Record(s) Found");
                            console.log("Resolved ??? ", data[0].Is_Resolved);
                            if (data[0].Is_Resolved == 0) {
                                Address.value = data[0].Address_A;
                                Number.value = data[0].Contect;
                                CurrentAddress.value = data[0].Address_A;
                                CurrentNumber.value = data[0].Contect;

                                // console.log("Complain is already in progress with ID " + data[0].complain_id);
                                // AlreadyBooked.innerHTML = "Complain is already in progress with ID " + data[0].complain_id;
                                // AlreadyBooked.style.display = "";
                                // location.reload();
                                setTimeout(function () {
    console.log("Complain is already in progress with ID " + data[0].complain_id);
    AlreadyBooked.innerHTML = "Complain is already in progress with ID " + data[0].complain_id;
    AlreadyBooked.style.display = "";
    alert("Complain is already in progress with ID " + data[0].complain_id);
    location.reload(); // Reload the page after showing the alert
}, 1000);  // 1000 milliseconds = 1 second

                                 
                               

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
        }
    });

    showHide(true);

    // $(document).ready(function () {
    SubmitButton.addEventListener('click', function (event) {
        
        if (DebugMode) { console.log("Submit Button Clicked"); }
        let ReadyToSubmit = false;
        if (DebugMode) { console.log("Data to submit :: ", JSON.stringify(ReceivedData)); }
        if (ReceivedData && ReceivedData.Name && ReceivedData.Exchange && (ReceivedData.Address_A || ReceivedData.Address_B) && ReceivedData.Contect && ReceivedData.Circuit_ID && (CurrentAddress.value || ReceivedData.Address_A) && (CurrentNumber.value || ReceivedData.Contect)) {
            ReadyToSubmit = true;
        }
        if (ReadyToSubmit) {
            console.log("Calling data submit function////");
            submitData();
        } else {
            alert("Unable to Submit the Details, Please fill all the details.")
        }
    });
});

let submitData = function () {
    $('#sheetdb-form').on('submit', function (event) {
        if (DebugMode) { console.log("Data submission started."); }

        // Calculate Current Booking Date --- Old Method
        /*
        let Current_Date_Time = new Date(Date.now());
        let Current_Date_Time_SQL = Current_Date_Time.toISOString().slice(0, 19).replace('T', ' ');
        console.log(Current_Date_Time);
        console.log(Current_Date_Time_SQL);
        */
        
        // Calculate Current Booking Date --- New Method
        let Current_Date_Time = new Date(Date.now());

        // Manually format the date-time in local time for SQL format
        let year = Current_Date_Time.getFullYear();
        let month = String(Current_Date_Time.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        let day = String(Current_Date_Time.getDate()).padStart(2, '0');
        let hours = String(Current_Date_Time.getHours()).padStart(2, '0');
        let minutes = String(Current_Date_Time.getMinutes()).padStart(2, '0');
        let seconds = String(Current_Date_Time.getSeconds()).padStart(2, '0');

        // SQL format: 'YYYY-MM-DD HH:MM:SS'
        let Current_Date_Time_SQL = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        console.log(Current_Date_Time); // Local time
        console.log(Current_Date_Time_SQL); // Same local time in SQL format
        
        // debugger;
        const data = {
            Name: ReceivedData.Name,
            Exchange: ReceivedData.Exchange,
            Address_A: ReceivedData.Address_A,
            Address_B: ReceivedData.Address_B,
            Contact: ReceivedData.Contect,
            Circuit_ID: ReceivedData.Circuit_ID,
            CurrentAddress: CurrentAddress.value || ReceivedData.Address_A,
            Current_Contact: CurrentNumber.value || ReceivedData.Contect,
            Booking_Date: Current_Date_Time_SQL
        };
        if (DebugMode) { console.log("Data to Submit :: ", data); }
        // debugger;
        event.preventDefault(); // Prevent the default form submission
        $.ajax({
            type: 'POST',
            url: '../Php/complain_register.php', // Your PHP file that handles the submission
            data: data, // Serialize the form data
            success: function (response) {
                $('#AlreadyBooked').text(response); // Display the response message
                AlreadyBooked.style.display = "block";
                $('#sheetdb-form')[0].reset(); // Reset the form fields

                // Refresh the page after 1 seconds
                setTimeout(function () {
                    alert(response);
                    location.reload();
                }, 1000);
            },
            error: function () {
                $('#AlreadyBooked').text('An error occurred while submitting the form.');
                AlreadyBooked.style.display = "block";
            }
        });
        // console.log("Complain Booked");
    });
}