console.log("Tracking AAAA......");

document.addEventListener('DOMContentLoaded', (event) => {
    let trackmessage = document.getElementById('trackmessage');
    trackmessage.style.display = "none";

    let Circuit_Search = document.getElementById('Circuit_Search');
    let Complain_Search = document.getElementById('Complain_Search');
    let Searchbtn = document.getElementById('Searchbtn')
    let searchData = function (ClickedButton) {
        circuit_id = document.getElementById('track_circuit_id');
        complain_id = document.getElementById('track_id');

        // console.log('Input Field Circuit ID :: ' + circuit_id);
        console.log('Input Value Circuit ID :: ' + circuit_id.value);
        circuit_id = circuit_id.value + "";

        // console.log('Input Field Circuit ID :: ' + complain_id);
        console.log('Input Value Circuit ID :: ' + complain_id.value);
        complain_id = complain_id.value + "";

        fetch(`../Php/Track_Complain_Data_Fetch.php?circuit_id=${circuit_id}&complain_id=${complain_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Received Data :: ", data);


                if (true) {
                    if (data.length > 0) {
                        let pending_Complain_ID = undefined;
                        let pending_Circuit_ID = undefined;
                        console.log("Customer Details Found");
                        for (let i = 0; i < data.length; i++) {
                            console.log(data[i].Complain_ID, " :: ", data[i].Is_Resolved)

                            if (data[i].Is_Resolved == "0") {
                                pending_Complain_ID = data[i].Complain_ID;
                                pending_Circuit_ID = data[i].circuit_id;
                                booking_date = data[i].booking_date;
                                Address_A = data[i].Address_A;
                                contact = data[i].contact;
                                Name = data[i].Name;;
                                console.log(booking_date)
                                console.log(Address_A)
                                console.log(contact)
                                console.log(Name)
                                break;
                            }
                        }
                        if (pending_Complain_ID) {
                            let trackmessage = document.getElementById('trackmessage');
                            if (ClickedButton == 0) {
                                // trackmessage.innerHTML = "Complain is in Progress with ID :: " + pending_Complain_ID + booking_date + Address_A + contact + Name;
                                trackmessage.innerHTML = "Complain is in Progress with ID :: " + pending_Complain_ID + "<br>" +
                                    "Booking Date: " + booking_date + "<br>" +
                                    "Address: " + Address_A + "<br>" +
                                    "Contact: " + contact + "<br>" +
                                    "Name: " + Name;

                            } else {
                                trackmessage.innerHTML = "Complain is in Progress with Circuit ID :: " + pending_Circuit_ID;
                            }
                            trackmessage.style.display = "block";
                        } else {    // printing the last resolved complain 
                            if (ClickedButton == 0) {
                                trackmessage.innerHTML = "Complain is resolved with ID :: " + data[data.length - 1].Complain_ID;
                            } else {
                                trackmessage.innerHTML = "Complain is in Progress with Circuit ID :: " + data[data.length - 1].circuit_id;
                            }
                            trackmessage.style.display = "block";
                        }
                    }
                    else {
                        trackmessage.innerHTML = "We Could not found any record with given telephone number or complain ID";
                    }
                }
            })
    }

    Circuit_Search.addEventListener('click', function (event) {
        console.log("Circuit Search Button Clicked....");
        searchData(0);
    });

    Complain_Search.addEventListener('click', function (event) {
        console.log("Complain Search Button Clicked....");
        searchData(1);
    });

    Searchbtn.addEventListener('click', function (event) {
        console.log("Circuit Search Button Clicked....");
        searchData(3);
    });


});


