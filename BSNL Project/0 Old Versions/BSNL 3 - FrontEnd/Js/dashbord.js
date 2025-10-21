// // Add event listeners to "Close" buttons
// document.querySelectorAll('.closeBtn').forEach((button, index) => {
//     button.addEventListener('click', function () {
//         // Find the associated CloseRemark row and toggle visibility
//         const closeRemarkRow = document.querySelectorAll('.CloseRemark')[index];
//         if (closeRemarkRow.style.display === "none" || closeRemarkRow.style.display === "") {
//             closeRemarkRow.style.display = "table-row"; // Show the remark row
//         } else {
//             closeRemarkRow.style.display = "none"; // Hide the remark row
//         }
//     });
// });



const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});


// Constants for pagination
const recordsPerPage = 20;
let currentPage = 1;


// Sample data for fault orders
const faultOrders = [
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
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' },
    { id: 2, phone: '02717-69587', address: '456 Street B', mobile: '9876543222', date: '2024-09-26', duration: '3 hours' },
    { id: 1, phone: '040-80000', address: '123 Street A', mobile: '9876543210', date: '2024-09-25', duration: '2 hours' }
];

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

        remarkRow.innerHTML = `
                               <td colspan="2">
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
                               <td><button type="button" class="btn btn-outline-secondary">Submit</button></td>
                           `;

        // Add both rows to the table
        tbody.appendChild(orderRow);
        tbody.appendChild(remarkRow);
        // console.log("Added to table")
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
    console.log("Close Buttons ");
    // console.log(document.getElementsByClassName(".closeBtn"));
    // console.log(document.querySelectorAll(".assignBtn"));
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
window.onload = function () {
    renderTable(currentPage);
    renderPagination();
};

/*
function populateTable() {
    const tbody = document.getElementById('faultOrdersBody');
    tbody.innerHTML = ''; // Clear the table before populating

    faultOrders.forEach(order => {
        const orderRow = document.createElement('tr');
        orderRow.innerHTML = `
                        <td scope="row">${order.id}</td>
                        <td>${order.phone}</td>
                        <td>${order.address}</td>
                        <td>${order.mobile}</td>
                        <td>${order.date}</td>
                        <td>${order.duration}</td>
                        <td><button type="button" class="btn btn-outline-danger">Assign</button></td>
                        <td><button type="button" class="btn btn-outline-secondary closeBtn">Close</button></td>
                    `;

        // Remark row (hidden by default)
        const remarkRow = document.createElement('tr');
        remarkRow.classList.add('CloseRemark');
        remarkRow.style.display = 'none'; // Hidden by default

        remarkRow.innerHTML = `
                        <td colspan="2">
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
                        <td><button type="button" class="btn btn-outline-secondary">Submit</button></td>
                    `;

        // Add both rows to the table
        tbody.appendChild(orderRow);
        tbody.appendChild(remarkRow);
    });

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
*/

// Populate the table on window load
// window.onload = populateTable;
