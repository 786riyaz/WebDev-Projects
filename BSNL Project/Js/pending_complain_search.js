console.log("search pending complain started")


document.getElementById('searchBtn1').addEventListener('click', function () {
    let searchInput = document.getElementById('searchInput1').value;

    // Fetch data from the PHP script based on search input
    fetch(`../Php/pending_complain_search.php?search=${searchInput}`)
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
                        temp.Complain_ID = data[i].Complain_ID;
                        temp.Exchange = data[i].Exchange;
                        temp.circuit_id = data[i].circuit_id;
                        temp.Name = data[i].Name;
                        temp.current_address = data[i].current_address;
                        temp.current_contact = data[i].current_contact;
                        temp.booking_date = data[i].booking_date;
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
                // console.log(order);
                const orderRow = document.createElement('tr');

                orderRow.innerHTML = `
            <td>${order.Complain_ID}</td>
            <td>${order.Exchange}</td>
            <td>${order.circuit_id}</td>
            <td>${order.Name}</td>
            <td>${order.current_address}</td>
            <td>${order.current_contact}</td>
            <td>${order.booking_date}</td>
            <td>${order.duration}</td>
            <td><button type="button" class="btn btn-outline-danger assignBtn" >Assign</button></td>
            <td><button type="button" class="btn btn-outline-secondary closeBtn">Close</button></td>`;

                // Remark row (hidden by default)
                const remarkRow = document.createElement('tr');
                remarkRow.classList.add('CloseRemark');         // Riyaz Pathan
                remarkRow.style.display = 'none'; // Hidden by default

                remarkRow.innerHTML = `<td colspan="2">
                                   <select class="form-select" aria-label="Default select example" id="ResolutionCode_${order.Complain_ID}">
                                       <option selected>Choose Issue</option>
                                       <option value="200">Power Issue (200)</option>
                                       <option value="300">Cable Issue (300)</option>
                                       <option value="500">Server Issue (500)</option>
                                   </select>
                               </td>
                               <td colspan="7">
                                   <div class="input-group mb-3">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Remark</span>
                                       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="ResolutionRemark_${order.Complain_ID}">
                                   </div>
                               </td>
                               <td><button type="button" class="btn btn-outline-secondary" onClick="updateComplainDetails(this,${order.duration})" id="CloseButton_${order.Complain_ID}">Submit</button></td>`;

                const MessageRow = document.createElement('tr');
                MessageRow.classList.add(`Message_${order.Complain_ID}`);         // Riyaz Patha
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
});