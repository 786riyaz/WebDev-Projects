console.log("Dashboard Script Started....");

// Sample data for fault orders
let faultOrders = [
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' }];

fetch(`../Php/fetchComplain.php`)
    // fetch(`test.php`)
    .then((response) => response.json())
    .then((data) => {
        /*
        {
            "Complain_ID": "26",
            "Telephone_Number": "079-123123",
            "Current_Address": "32-A, Sanjar Park-2, Danilimda, Ahmedabad - 380028",
            "Current_Mobile_Number": "9909221451",
            "Complain_Description": "",
            "Is_Resolved": "0",
            "Booking_Date": "2024-09-29 22:38:53"
        }
            */

        /*
        getFullYear()	Get year as a four digit number (yyyy)
        getMonth()	Get month as a number (0-11)
        getDate()	Get day as a number (1-31)
        getDay()	Get weekday as a number (0-6)
        getHours()	Get hour (0-23)
        getMinutes()	Get minute (0-59)
        getSeconds()	Get second (0-59)
        getMilliseconds()	Get millisecond (0-999)
        getTime()
        */

        if (true) {
            if (data.length > 0) {
                console.log("Received Data :: ", data);
                faultOrders = [];
                for (let i = 0; i < data.length; i++) {
                    temp = {};
                    temp.id = data[i].Complain_ID;
                    temp.phone = data[i].Telephone_Number;
                    temp.address = data[i].Current_Address;
                    temp.mobile = data[i].Current_Mobile_Number;
                    temp.date = data[i].Booking_Date;
                    temp.duration = 0;

                    let currentTime = Date.now();
                    console.log("Current Time in JavaScript :: ", currentTime);
                    
                    const dateString = temp.date; // Ensure temp.date is in a valid format
                    console.log("Database Date :: ", dateString);
                    console.log(typeof (dateString));
                    
                    // Create dateObject from the dateString
                    const dateObject = new Date(dateString.replace(" ", "T"));
                    console.log("Object :: ", dateObject);
                    
                    // Create a new date object for the static date string
                    // const dateString1 = "Sun Sep 29 2024 22:38:53 GMT+0530 (India Standard Time)";
                    const dateString1 = dateObject;
                    const dateObject2 = new Date(dateString1);
                    
                    // Calculate the Unix timestamps
                    const unixEpoch = dateObject2.getTime();
                    const unixEpochInSeconds = Math.floor(unixEpoch / 1000);
                    console.log("Seconds :: ", unixEpochInSeconds);
                    
                    // Calculate the current time as a Date object and get its Unix timestamp
                    const currentUnixEpoch = Date.now(); // This is already in milliseconds
                    const currentUnixEpochInSeconds = Math.floor(currentUnixEpoch / 1000);
                    
                    // Calculate the difference in seconds
                    const differenceInSeconds = currentUnixEpochInSeconds - unixEpochInSeconds;
                    console.log("Difference in Seconds :: ", differenceInSeconds);
                    console.log("Difference in Hours :: ", differenceInSeconds / 3600);
                    temp.duration = Math.floor(differenceInSeconds / 3600);
                    faultOrders.push(temp);
                }
                // console.log(faultOrders);
                RenderWholePage();
            }
            else {
                // AlreadyBooked.innerHTML = "We Could not found any record with given telephone number";
            }
        }
    })

RenderWholePage = function () {
    // console.log("Rendering Whole Page with Fetched Data from DB....");
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
            remarkRow.classList.add('CloseRemark');
            remarkRow.style.display = 'none'; // Hidden by default
            // remarkRow.style.display = 'block'; // Hidden by default

            remarkRow.innerHTML = `<td colspan="2">
                                   <select class="form-select" aria-label="Default select example">
                                       <option selected>Open this select menu</option>
                                       <option value="1">One</option>
                                       <option value="2">Two</option>
                                       <option value="3">Three</option>
                                   </select>
                               </td>
                               <td colspan="5">
                                   <div class="input-group mb-3">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Remark</span>
                                       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                   </div>
                               </td>
                               <td><button type="button" class="btn btn-outline-secondary">Submit</button></td>`;

            // Add both rows to the table
            tbody.appendChild(orderRow);
            tbody.appendChild(remarkRow);
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
        // console.log("Close Buttons ");
        document.querySelectorAll('.closeBtn').forEach((button, index) => {
            // console.log("close button :: ", button)
            button.addEventListener('click', function () {
                console.log("Clicked.")
                const closeRemarkRow = document.querySelectorAll('.CloseRemark')[index];
                if (closeRemarkRow.style.display === "none" || closeRemarkRow.style.display === "") {
                    closeRemarkRow.style.display = "table-row"; // Show the remark row
                } else {
                    closeRemarkRow.style.display = "none"; // Hide the remark row
                }
            });
        });
    }

    // Populate the table and render pagination on window load

    renderTable(currentPage);
    renderPagination();


}