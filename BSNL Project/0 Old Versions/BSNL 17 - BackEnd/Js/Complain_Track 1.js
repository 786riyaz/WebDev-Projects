// console.log("traking strated...???.");

// let track_circuit_id = document.getElementById('track_circuit_id');
// let track_id = document.getElementById('track_id')


// let ReceivedData = [];
// let trackmessage = document.getElementById('trackmessage');
// trackmessage.style.display = 'none';

// fetch(`../Php/home.php`)
//     .then((response) => response.json())
//     .then((data) => {
//         // Add the event listener after fetching the data
//         Search_Button.addEventListener('click', function (event) {
//             // Get the input values
//             let track_circuit_id = document.getElementById('track_circuit_id').value;
//             let track_id = document.getElementById('track_id').value;

//             console.log("Track number ::: " + track_circuit_id);
//             console.log("Received Data :: ", data);

//             // Loop through the data array
//             data.forEach((item) => {
//                 // Ensure the item is valid
//                 if (data.length > 0) {
//                     // Compare the circuit_id with track_circuit_id
//                     if(item.circuirt == track_circuit_id && Is_Resolved == 0){
//                         console.log("pending")
//                     }                    // Compare the circuit_id with track_circuit_id
//                     if(item.circuirt == track_circuit_id && Is_Resolved == 1){
//                         console.log("complete")
//                     }else{
//                         console.log("no record")
//                     }
//                 }
//             });
//         });
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// console.log("Tracking started...");

// let trackmessage = document.getElementById('trackmessage');
// trackmessage.style.display = 'none';

// fetch(`../Php/home.php`)
//     .then((response) => response.json())
//     .then((data) => {
//         // Add the event listener after fetching the data
//         Search_Button.addEventListener('click', function (event) {
//             // Get the input values
//             let track_circuit_id = document.getElementById('track_circuit_id').value;
//             let track_id = document.getElementById('track_id').value;

//             console.log("Track number ::: " + track_circuit_id);
//             console.log("Received Data :: ", data);

//             // Check if data exists
//             if (data.length > 0) {
//                 // Loop through the data array
//                 let found = false;
//                 trackmessage.style.display = "block"; 

//                 data.forEach((item) => {
//                     // Compare the circuit_id and Is_Resolved values
//                     if (item.circuit_id == track_circuit_id) {
//                         found = true;  // Circuit found
//                         if (item.Is_Resolved == 0) {
                            
//                             trackmessage.innerText = "Work in process...";
//                             console.log("Work in process: " + trackmessage.innerText);
//                         } else if (item.Is_Resolved == 1) {
//                             trackmessage.style.display = "block"
//                             console.log("Your complain is solved" + trackmessage.value);
                            
//                         }
//                     }
//                 });

//                 // If no circuit was found
//                 if (!found) {
//                     trackmessage.style.display = "block";
//                     trackmessage.innerText = "No record found.";
//                     console.log("No record found.");
//                 }
//             } else {
//                 console.log("No data available");
//             }
//         });
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });


console.log("Tracking started...");

let trackmessage = document.getElementById('trackmessage');
trackmessage.style.display = 'none'; // Initially hide the message

fetch(`../Php/home.php`)
    .then((response) => response.json())
    .then((data) => {
        // Add the event listener after fetching the data
        Search_Button.addEventListener('click', function (event) {
            // Get the input values
            let track_circuit_id = document.getElementById('track_circuit_id').value;
            let track_id = document.getElementById('track_id').value;

            console.log("Track number ::: " + track_circuit_id);
            console.log("Received Data :: ", data);

            // Check if data exists
            if (data.length > 0) {
                // Loop through the data array
                let found = false;
                data.forEach((item) => {
                    // Compare the circuit_id and Is_Resolved values
                    if (item.circuit_id == track_circuit_id) {
                        found = true;  // Circuit found
                        trackmessage.style.display = "block"; // Show the message element

                        if (item.Is_Resolved == 0) {
                            // Update the message text for "work in process"
                            trackmessage.innerText = "Work in process...";
                            console.log("Work in process: " + trackmessage.innerText);
                        } else if (item.Is_Resolved == 1) {
                            // Update the message text for "complaint resolved"
                            trackmessage.innerText = "Your complaint is resolved.";
                            console.log("Your complaint is resolved: " + trackmessage.innerText);
                        }
                    }
                });

                // If no circuit was found
                if (!found) {
                    trackmessage.style.display = "block";
                    trackmessage.innerText = "No record found.";
                    console.log("No record found.");
                }
            } else {
                console.log("No data available");
            }

            // if (data.length > 0) {
            //     // Loop through the data array
            //     let found = false;
            //     data.forEach((item) => {
            //         // Compare the circuit_id and Is_Resolved values
            //         if (item.Complain_ID == track_id) {
            //             found = true;  // Circuit found
            //             trackmessage.style.display = "block"; // Show the message element

            //             if (item.Is_Resolved == 0) {
            //                 // Update the message text for "work in process"
            //                 trackmessage.innerText = "Work in process...";
            //                 console.log("Work in process: " + trackmessage.innerText);
            //             } else if (item.Is_Resolved == 1) {
            //                 // Update the message text for "complaint resolved"
            //                 trackmessage.innerText = "Your complaint is resolved.";
            //                 console.log("Your complaint is resolved: " + trackmessage.innerText);
            //             }
            //         }
            //     });

            //     // If no circuit was found
            //     if (!found) {
            //         trackmessage.style.display = "block";
            //         trackmessage.innerText = "No record found.";
            //         console.log("No record found.");
            //     }
            // } else {
            //     console.log("No data available");
            // }


        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
