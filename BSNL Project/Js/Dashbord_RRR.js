console.log("Dashboard Script Started !!! ....");

let Current_Date_Time = new Date(Date.now());
let Current_Date_Time_SQL = Current_Date_Time.toISOString().slice(0, 19).replace('T', ' ');

updateComplainDetails = function (element, duration) {
    console.log("Update ComplainDetails Initiated ");
    let CloseButtonID = element.id;
    console.log("Close Button ID :: ", CloseButtonID);

    let TargetComplainID = element.id.split("_")[1];
    console.log("Target Complain ID :: ", TargetComplainID);

    let ResolutionRemarkID = 'ResolutionRemark_' + TargetComplainID;
    let ResolutionCodeID = 'ResolutionCode_' + TargetComplainID;
    // let DurationID = 'Duration_' + TargetComplainID;
    let MessageID = 'Message_' + TargetComplainID;
    let MessageTR = document.getElementsByClassName(MessageID)[0];

    let ResolutionRemark = document.getElementById(ResolutionRemarkID).value;
    let ResolutionCode = document.getElementById(ResolutionCodeID).value;
    // let Duration = document.getElementById(DurationID).value;

    const data = {
        ResolutionRemark: ResolutionRemark,
        ResolutionCode: ResolutionCode,
        DateTime: Current_Date_Time_SQL,
        Duration: duration,
        ID: parseInt(TargetComplainID)
    };
    
    // Create an object to send via AJAX
    $.ajax({
        type: 'POST',
        url: '../Php/Complain_Update.php', // Your PHP file that handles the submission
        data: data, // Send the data object
        success: function (response) {
            console.log("Response :: ", response);
            if (response == "Complain Details update!") {
                alert("Complain Details Updated!");
                location.reload();
            } else {
                MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                MessageTR.style.display = 'block';
            }
        },
        error: function () {
            MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
            MessageTR.style.display = 'block';
        }
    });
}

// Sample data for fault orders
let faultOrders = [{ id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' }];

fetch(`../Php/Complain_Fetch_UnResolved.php`)
    .then((response) => response.json())
    .then((data) => {

        if (true) {
            // console.log("Received Data :: ", data);
            if (data.length > 0) {
                let NoComplainMessage = document.getElementById('NoComplainMessage');
                NoComplainMessage.style.display = "none";

                faultOrders = [];
                for (let i = 0; i < data.length; i++) {
                    temp = {};
                    temp.id = data[i].Complain_ID;
                    temp.phone = data[i].Telephone_Number;
                    temp.address = data[i].Current_Address;
                    temp.mobile = data[i].Current_Mobile_Number;
                    temp.date = data[i].Booking_Date;
                    temp.duration = 0;

                    const dateString = temp.date; // Ensure temp.date is in a valid format

                    // Create dateObject from the dateString
                    const dateObject = new Date(dateString.replace(" ", "T"));
                    const dateString1 = dateObject;
                    const dateObject2 = new Date(dateString1);

                    // Calculate the Unix timestamps
                    const unixEpoch = dateObject2.getTime();
                    const unixEpochInSeconds = Math.floor(unixEpoch / 1000);

                    // Calculate the current time as a Date object and get its Unix timestamp
                    const currentUnixEpoch = Date.now(); // This is already in milliseconds
                    const currentUnixEpochInSeconds = Math.floor(currentUnixEpoch / 1000);

                    // Calculate the difference in seconds
                    const differenceInSeconds = currentUnixEpochInSeconds - unixEpochInSeconds;
                    temp.duration = Math.floor(differenceInSeconds / 3600);
                    faultOrders.push(temp);
                }

                RenderWholePage();
            }
            else {
                let NoComplainMessage = document.getElementById('NoComplainMessage');
                NoComplainMessage.innerHTML = "We Could not found any record in complain Database";
                NoComplainMessage.style.display = "block";
            }
        }
    })

RenderWholePage = function () {
    const hamBurger = document.querySelector(".toggle-btn");

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });

    // Constants for pagination
    const recordsPerPage = 20;
    let currentPage = 1;

    // Function to render table rows based on the current page
    function renderTable(page) {
        const start = (page - 1) * recordsPerPage;
        const end = start + recordsPerPage;
        const tbody = document.getElementById('faultOrdersBody');
        tbody.innerHTML = ''; // Clear the table before populating

        faultOrders.slice(start, end).forEach(order => {
            const orderRow = document.createElement('tr');
            orderRow.innerHTML = `
            <td>${order.id}</td>
            <td>${order.phone}</td>
            <td>${order.address}</td>
            <td>${order.mobile}</td>
            <td>${order.date}</td>
            <td>${order.duration}</td>
            <td><button type="button" class="btn btn-outline-danger assignBtn" >Assign</button></td>
            <td><button type="button" class="btn btn-outline-secondary closeBtn">Close</button></td>`;

            // Remark row (hidden by default)
            const remarkRow = document.createElement('tr');
            remarkRow.classList.add('CloseRemark');         // Riyaz Pathan
            remarkRow.style.display = 'none'; // Hidden by default

            remarkRow.innerHTML = `<td colspan="2">
                                   <select class="form-select" aria-label="Default select example" id="ResolutionCode_${order.id}">
                                       <option selected>Choose Issue</option>
                                       <option value="200">Power Issue (200)</option>
                                       <option value="300">Cable Issue (300)</option>
                                       <option value="500">Server Issue (500)</option>
                                   </select>
                               </td>
                               <td colspan="5">
                                   <div class="input-group mb-3">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Remark</span>
                                       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="ResolutionRemark_${order.id}">
                                   </div>
                               </td>
                               <td><button type="button" class="btn btn-outline-secondary" onClick="updateComplainDetails(this,${order.duration})" id="CloseButton_${order.id}">Submit</button></td>`;

            const MessageRow = document.createElement('tr');
            MessageRow.classList.add(`Message_${order.id}`);         // Riyaz Patha
            MessageRow.style.display = 'none'; // Hidden by default
            MessageRow.innerHTML = `<td colspan="2" ><h3>Message</h3></td>`;


            // Add both rows to the table
            tbody.appendChild(orderRow);
            tbody.appendChild(remarkRow);
            tbody.appendChild(MessageRow);
        });
        addCloseClass();
    }

    // Function to render pagination buttons
    function renderPagination() {
        const totalPages = Math.ceil(faultOrders.length / recordsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = ''; // Clear pagination buttons

        // Create Previous button
        const prevBtn = document.createElement('li');
        prevBtn.classList.add('page-item');
        if (currentPage === 1) prevBtn.classList.add('disabled');
        prevBtn.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable(currentPage);
                renderPagination();
            }
        };
        pagination.appendChild(prevBtn);

        // Create page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('li');
            pageBtn.classList.add('page-item');
            if (i === currentPage) pageBtn.classList.add('active');
            pageBtn.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageBtn.onclick = () => {
                currentPage = i;
                renderTable(currentPage);
                renderPagination();
            };
            pagination.appendChild(pageBtn);
        }

        // Create Next button
        const nextBtn = document.createElement('li');
        nextBtn.classList.add('page-item');
        if (currentPage === totalPages) nextBtn.classList.add('disabled');
        nextBtn.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderTable(currentPage);
                renderPagination();
            }
        };
        pagination.appendChild(nextBtn);
    }

    addCloseClass = function () {
        // Add event listeners to each "Close" button to toggle the corresponding CloseRemark row
        document.querySelectorAll('.closeBtn').forEach((button, index) => {
            button.addEventListener('click', function () {
                const closeRemarkRow = document.querySelectorAll('.CloseRemark')[index];
                if (closeRemarkRow.style.display === "none" || closeRemarkRow.style.display === "") {
                    closeRemarkRow.style.display = "table-row"; // Show the remark row
                } else {
                    closeRemarkRow.style.display = "none"; // Hide the remark row
                }
            });
        });
    }

    // Populate the table and render pagination
    renderTable(currentPage);
    renderPagination();
}