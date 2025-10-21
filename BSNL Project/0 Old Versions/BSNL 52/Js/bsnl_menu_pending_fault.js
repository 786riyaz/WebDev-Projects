console.log("bsnl menu pending complain js started...")

let Current_Date_Time = new Date(Date.now());

// Format the date to 'YYYY-MM-DD HH:MM:SS' in local time
let Current_Date_Time_SQL = Current_Date_Time.getFullYear() + '-' +
    ('0' + (Current_Date_Time.getMonth() + 1)).slice(-2) + '-' +
    ('0' + Current_Date_Time.getDate()).slice(-2) + ' ' +
    ('0' + Current_Date_Time.getHours()).slice(-2) + ':' +
    ('0' + Current_Date_Time.getMinutes()).slice(-2) + ':' +
    ('0' + Current_Date_Time.getSeconds()).slice(-2);

console.log(Current_Date_Time);        // Logs the current time in local time zone
console.log(Current_Date_Time_SQL); 


updateComplainDetails = function (element, duration) {
    console.log("Update Complain Details Initiated");

    // Extract IDs and fetch elements
    let CloseButtonID = element.id;
    let TargetComplainID = CloseButtonID.split("_")[1];
    console.log("Close Button ID:", CloseButtonID);
    console.log("Target Complain ID:", TargetComplainID);

    // Define element IDs based on the TargetComplainID

    let BsnlRemarkID = `BsnlRemark_${TargetComplainID}`;
    let ResolutionCodeID = `ResolutionCode_${TargetComplainID}`;
   
    let MessageID = `Message_${TargetComplainID}`;
    let MessageTR = document.getElementsByClassName(MessageID)[0];

    // Fetch values from input fields
    let BsnlRemark = document.getElementById(BsnlRemarkID)?.value || '';
    let ResolutionCode = document.getElementById(ResolutionCodeID)?.value || '';
 

    // Set the current date and time in SQL format for the resolve date
    let ResolveDateTime = new Date().toISOString().slice(0, 19).replace('T', ' '); 
    
    if(ResolutionCode === "Return to Franchises"){
        const data1 = {
            BsnlRemark : BsnlRemark,
            ResolveDateTime : Current_Date_Time_SQL,
            ResolutionCode: ResolutionCode,
            Duration: duration,
            ID: parseInt(TargetComplainID)
        };
        $.ajax({
            type: 'POST',
            url: '../Php/bsnl_complain_reassign.php',
            data: data1,
            success: function (response) {
                console.log("Response:", response);
                if (response == "Complain Details update!") {
                    alert("Complain Details Updated!");
                    location.reload();
                } else {
                    MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                    MessageTR.style.display = 'none';
                }
            },
            error: function () {
                MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                MessageTR.style.display = 'none';
            }
        });
    }

    else{

    
    // Create data object for AJAX request
    const data = {
        BsnlRemark : BsnlRemark,
        ResolveDateTime : Current_Date_Time_SQL,
        Duration: duration,
        ID: parseInt(TargetComplainID)
    };

    console.log("Data to update:", JSON.stringify(data));

    // AJAX request to update complain details
    $.ajax({
        type: 'POST',
        url: '../Php/bsnl_complain_update.php',
        data: data,
        success: function (response) {
            console.log("Response:", response);
            if (response == "Complain Details update!") {
                alert("Complain Details Updated!");
                location.reload();
            } else {
                MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                MessageTR.style.display = 'none';
            }
        },
        error: function () {
            MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
            MessageTR.style.display = 'none';
        }
    });

}
};

// Function to display error messages
function displayErrorMessage(message, MessageTR) {
    MessageTR.innerHTML = `<td colspan="6"><h3>${message}</h3></td>`;
    MessageTR.style.display = 'block';
}












fetch(`../Php/bsnl_complain_pending_rooc.php`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        // console.log("Received Data :: ", data);
        if (data.length > 0) {
            let NoComplainMessage = document.getElementById('NoComplainMessage');
            NoComplainMessage.style.display = "none";

            faultOrders = [];
            for (let i = 0; i < data.length; i++) {
                temp = {};
                temp.Complain_ID = data[i].Complain_ID;
                temp.Exchange = data[i].Exchange;
                temp.circuit_id = data[i].circuit_id;
                temp.Name = data[i].Name;
                temp.current_address = data[i].current_address;
                temp.current_contact = data[i].current_contact;
                temp.booking_date = data[i].booking_date;
                temp.complain_solve_remark = data[i].complain_solve_remark;
                temp.complain_solve_code = data[i].complain_solve_code;
                temp.duration = 0;

                const dateString = temp.booking_date; // Ensure temp.date is in a valid format

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
                const durationaaa = Math.floor(differenceInSeconds / 3600);
                temp.duration = Math.floor(differenceInSeconds / 3600);

                console.log(dateString)
                faultOrders.push(temp);
            }
            RenderWholePage();
        }
        else {
            let NoComplainMessage = document.getElementById('NoComplainMessage');
            NoComplainMessage.innerHTML = "We Could not found any record in complain Database";
            NoComplainMessage.style.display = "block";
        }

    })



let faultOrders = [];
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
        const tbody = document.getElementById('faultOrdersBody2');
        tbody.innerHTML = ''; // Clear the table before populating

        // Handle case if faultOrders is empty or undefined
        if (!faultOrders || faultOrders.length === 0) {
            tbody.innerHTML = `<tr><td colspan="10" class="text-center">No complaints found.</td></tr>`;
            return;
        }

        faultOrders.slice(start, end).forEach(order => {
            const { Complain_ID, Exchange, circuit_id, Name, current_address, current_contact, booking_date, duration } = order;

            // Create the main order row
            const orderRow = document.createElement('tr');
            orderRow.innerHTML = `
                <td>${Complain_ID}</td>
                <td>${Exchange}</td>
                <td>${circuit_id}</td>
                <td>${Name}</td>
                <td>${current_address}</td>
                <td>${current_contact}</td>
                <td>${booking_date}</td>
                <td>${duration}</td>
                <td><button type="button" class="btn btn-outline-danger assignBtn">Assign</button></td>
                <td><button type="button" class="btn btn-outline-danger closeBtn">Close</button></td>
            `;

            // Create the hidden remark row
            const remarkRow = document.createElement('tr');
            remarkRow.classList.add('remark_reassign');
            remarkRow.style.display = 'none';
            remarkRow.innerHTML = `<td colspan="1">
                    <select class="form-select" aria-label="Select ROOC" disabled>
                        <option>ROOC</option>
                    </select>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Franchises Remark</span>
                        <input type="text" class="form-control" disabled>
                    </div>
                </td>
                <td colspan="1">
                    <select class="form-select" aria-label="Choose Issue" id="ResolutionCode_${order.Complain_ID}">
                        <option selected>Choose Issue</option>
                        <option value="Return to Franchises">Return to Franchises</option>
                    </select>
                </td>
                <td colspan="4">
                    <div class="input-group mb-3">
                        <span class="input-group-text">BSNL Remark</span>
                          <input type="text" class="form-control" id="BsnlRemark_${Complain_ID}">
                    </div>
                </td>
                <td><button type="button" class="btn btn-outline-secondary assignBtn" onClick="updateComplainDetails(this, ${duration})" id="CloseButton_${order.Complain_ID}">Submit</button></td>
                 `;

            // Create the hidden close row
            const closeComplainRow = document.createElement('tr');
            closeComplainRow.classList.add('close_complain');
            closeComplainRow.style.display = 'none';
            closeComplainRow.innerHTML = `
                <td colspan="1">
                    <select class="form-select" aria-label="Select ROOC" disabled>
                        <option>ROOC</option>
                    </select>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <span class="input-group-text">F Remark</span>
                        <input type="text" class="form-control" placeholder="asdas" disabled>
                    </div>
                </td>
                <td colspan="5">
                    <div class="input-group mb-3">
                        <span class="input-group-text">BSNL Remark</span>
                        <input type="text" class="form-control" id="BsnlRemark_${Complain_ID}">
                    </div>
                </td>
                <td>
                    <button type="button" class="btn btn-outline-secondary closeBtn" 
                            onClick="updateComplainDetails(this, ${duration})"  
                            id="CloseButton_${Complain_ID}">
                        Submit
                    </button>
                </td>
            `;

            // Create message row for error display
            const messageRow = document.createElement('tr');
            messageRow.classList.add(`Message_${order.Complain_ID}`);
            messageRow.style.display = 'none';
            messageRow.innerHTML = `<td colspan="10"><h3>Message</h3></td>`;

            // Append rows to the table body
            tbody.appendChild(orderRow);
            tbody.appendChild(remarkRow);
            tbody.appendChild(closeComplainRow);
            tbody.appendChild(messageRow);

            // Event listeners for buttons
            orderRow.querySelector('.assignBtn').addEventListener('click', () => toggleRow(remarkRow, closeComplainRow));
            orderRow.querySelector('.closeBtn').addEventListener('click', () => toggleRow(closeComplainRow, remarkRow));
        });
    }

    // Toggle visibility of rows
    function toggleRow(rowToShow, rowToHide) {
        rowToShow.style.display = rowToShow.style.display === 'none' ? 'table-row' : 'none';
        rowToHide.style.display = 'none';
    }

    // Render pagination controls
    function renderPagination() {
        const totalPages = Math.ceil(faultOrders.length / recordsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = ''; // Clear pagination buttons

        // Previous button
        const prevBtn = document.createElement('li');
        prevBtn.classList.add('page-item', currentPage === 1 ? 'disabled' : '');
        prevBtn.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        prevBtn.onclick = () => currentPage > 1 && navigatePage(--currentPage);
        pagination.appendChild(prevBtn);

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('li');
            pageBtn.classList.add('page-item', i === currentPage ? 'active' : '');
            pageBtn.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageBtn.onclick = () => navigatePage(i);
            pagination.appendChild(pageBtn);
        }

        // Next button
        const nextBtn = document.createElement('li');
        nextBtn.classList.add('page-item', currentPage === totalPages ? 'disabled' : '');
        nextBtn.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextBtn.onclick = () => currentPage < totalPages && navigatePage(++currentPage);
        pagination.appendChild(nextBtn);
    }

    // Navigate to a specific page
    function navigatePage(page) {
        currentPage = page;
        renderTable(currentPage);
        renderPagination();
    }

    // Initialize table and pagination
    renderTable(currentPage);
    renderPagination();
};
