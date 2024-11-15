console.log("bsnl menu pending complain js started...")

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
        
        faultOrders.slice(start, end).forEach(order => {
            // Create the order row
            console.log(order);

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
                <td><button type="button" class="btn btn-outline-danger assignBtn">Assign</button></td>
                <td><button type="button" class="btn btn-outline-danger closeBtn">Close</button></td>
            `;
    
            // Create the remark_reassign row (hidden by default)
            const remarkRow = document.createElement('tr');
            remarkRow.classList.add('remark_reassign');
            remarkRow.style.display = 'none'; // Hidden by default
            remarkRow.innerHTML = `
                <td colspan="1">
                    <select class="form-select" aria-label="Default select example" disabled>
                        <option>ROOC</option>
                    </select>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="complain_solve_remark_${order.Complain_ID}">F Remark</span>
                        <input type="text" class="form-control" disabled>
                    </div>
                </td>
                <td colspan="2">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose Issue</option>
                        <option value="200">r a f</option>
                    </select>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Bsnl Remark</span>
                        <input type="text" class="form-control">
                    </div>
                </td>
                <td><button type="button" class="btn btn-outline-secondary assignBtn">Submit</button></td>
            `;
    
            // Create the close_complain row (hidden by default)
            const closeComplainRow = document.createElement('tr');
            closeComplainRow.classList.add('close_complain');
            closeComplainRow.style.display = 'none';
            closeComplainRow.innerHTML = `
                <td colspan="1">
                    <select class="form-select" aria-label="Default select example" disabled>
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
                        <span class="input-group-text">Bsnl Remark</span>
                        <input type="text" class="form-control">
                    </div>
                </td>
                <td><button type="button" class="btn btn-outline-secondary closeBtn">Submit</button></td>
            `;
            
            let complain_solve_remark = order.complain_solve_remark;
            console.log(complain_solve_remark)

            // Create the message row (hidden by default)
            const MessageRow = document.createElement('tr');
            MessageRow.classList.add(`Message_${order.Complain_ID}`);
            MessageRow.style.display = 'none'; // Hidden by default
            MessageRow.innerHTML = `<td colspan="2"><h3>Message</h3></td>`;
    
            // Append all rows to the table body
            tbody.appendChild(orderRow);
            tbody.appendChild(remarkRow);
            tbody.appendChild(closeComplainRow);
            tbody.appendChild(MessageRow);
        });
    
        // Call addCloseClass after appending rows to attach event listeners
        addCloseClass();
    }
    
    function addCloseClass() {
        // Toggle each remark_reassign row when clicking an assignBtn
        document.querySelectorAll('.assignBtn').forEach((button, index) => {
            button.addEventListener('click', function () {
                const remarkReassignRow = document.querySelectorAll('.remark_reassign')[index];
                const closeComplainRow = document.querySelectorAll('.close_complain')[index];
    
                if (remarkReassignRow.style.display === 'none' || remarkReassignRow.style.display === '') {
                    remarkReassignRow.style.display = 'table-row';
                    closeComplainRow.style.display = 'none';
                } else {
                    remarkReassignRow.style.display = 'none';
                }
            });
        });
    
        // Toggle each close_complain row when clicking a closeBtn
        document.querySelectorAll('.closeBtn').forEach((button, index) => {
            button.addEventListener('click', function () {
                const closeComplainRow = document.querySelectorAll('.close_complain')[index];
                const remarkReassignRow = document.querySelectorAll('.remark_reassign')[index];
    
                if (closeComplainRow.style.display === 'none' || closeComplainRow.style.display === '') {
                    closeComplainRow.style.display = 'table-row';
                    remarkReassignRow.style.display = 'none';
                } else {
                    closeComplainRow.style.display = 'none';
                }
            });
        });
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



    // Populate the table and render pagination
    renderTable(currentPage);
    renderPagination();
    
}