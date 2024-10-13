console.log("Complain Completed Script Started !!!");

let Current_Date_Time = new Date(Date.now());
let Current_Date_Time_SQL = Current_Date_Time.toISOString().slice(0, 19).replace('T', ' ');

updateComplainDetails = function (element) {
    console.log("Update ComplainDetails Initiated ");
    let TargetComplainID = element.id.split("_")[1];

    let ResolutionRemarkID = 'ResolutionRemark_' + TargetComplainID;
    let ResolutionCodeID = 'ResolutionCode_' + TargetComplainID;
    let MessageID = 'Message_' + TargetComplainID;
    let MessageTR = document.getElementsByClassName(MessageID)[0];

    let ResolutionRemark = document.getElementById(ResolutionRemarkID).value;
    let ResolutionCode = document.getElementById(ResolutionCodeID).value;

    const data = {
        ResolutionRemark: ResolutionRemark,
        ResolutionCode: ResolutionCode,
        DateTime: Current_Date_Time_SQL,
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
                // MessageTR.innerHTML = '<td colspan="6"><h3>Complain is Closed</h3></td>'
                // MessageTR.style.display = 'block';
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
let faultOrders = [
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' }];

fetch(`../Php/Complain_Fetch_Completed.php`)
    .then((response) => response.json())
    .then((data) => {
        //    Complain_ID, Telephone_Number, Current_Address, Current_Mobile_Number, Complain_Description, Is_Resolved, Booking_Date

        if (true) {
            if (data.length > 0) {
                let NoComplainMessage = document.getElementById('NoComplainMessage');
                NoComplainMessage.style.display = "none";

                console.log("Received Data :: ",data)
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
                    temp.complain_solve_date = data[i].complain_solve_date;
                    temp.duration = data[i].Resolution_Duration;
                    temp.remark = data[i].complain_solve_remark;
                    temp.code = data[i].complain_solve_code;
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
            <td>${order.Complain_ID}</td>
            <td>${order.Exchange}</td>
            <td>${order.circuit_id}</td>
            <td>${order.Name}</td>
            <td>${order.current_address}</td>
            <td>${order.current_contact}</td>
            <td>${order.booking_date}</td>
            <td>${order.complain_solve_date}</td>
            <td>${order.duration}</td>
            
            <td><button type="button" class="btn btn-outline-secondary closeBtn">Remark</button></td>`;

            // Remark row (hidden by default)
            const remarkRow = document.createElement('tr');
            remarkRow.classList.add('CloseRemark');         // Riyaz Pathan
            remarkRow.style.display = 'none';               // Hidden by default

            remarkRow.innerHTML = `<td colspan="2">
                                 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="ResolutionCode_${order.id}" disabled>
                               </td>
                               <td colspan="8">
                                   <div class="input-group mb-3">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Remark</span>
                                       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="ResolutionRemark_${order.id}" disabled>
                                   </div>
                               </td>`;

            // Add both rows to the table
            tbody.appendChild(orderRow);
            tbody.appendChild(remarkRow);

            let ResolutionCode = document.getElementById(`ResolutionCode_${order.id}`);
            let ResolutionRemark = document.getElementById(`ResolutionRemark_${order.id}`);

            ResolutionRemark.value = order.remark;
            ResolutionCode.value = order.code;
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
