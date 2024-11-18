console.log("Circuit Data Started !!!!aaa!!!!");

document.querySelector('.toggle-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('expand');
    });


const recordsPerPage = 20;
let currentPage = 1;
let totalPages = 0;
let data = [];

function renderTable() {
    let tbody = document.getElementById('circuitdata');
    tbody.innerHTML = ''; // Clear existing content

    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

    // Slice the data array for the current page
    const pageData = data.slice(startIndex, endIndex);

    // Loop through the current page's data and generate table rows
    pageData.forEach((order, index) => {
        let actionButtons = '';
        // Show Edit and Remove buttons only for admin or manager
        if (userRole === 'admin' || userRole === 'manager') {
            actionButtons = `
                <td><button type="button" class="btn btn-outline-danger edit-data" id="editdata" data-index="${index}">Edit</button></td>
                <td><button class="btn btn-outline-dark remove-data" data-index="${index}">Remove</button></td>
            `;
        }
    
        tbody.innerHTML += `
            <tr>  
                <td>${order.Sr_no}</td>
                <td>${order.Exchange}</td>
                <td>${order.Circuit_ID}</td>
                <td>${order.Name}</td>
                <td>${order.Address_A}</td>
                <td>${order.Address_B}</td>
                <td>${order.Contect}</td>
                <td>${order.Connectivity}</td>
                <td>${order.Cable_Lenght}</td>
                <td>${order.work_order_date}</td>
                ${actionButtons} <!-- Insert the action buttons dynamically -->
            </tr>
            <tr id="remove-reason-${index}" style="display:none;">
                <th colspan="10">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Reason</span>
                        <input type="text" class="form-control" id="Reason_${order.Circuit_ID}">
                    </div>
                    <td><button type="button" class="btn btn-outline-danger remove-confirm" data-index="${index}" id="Submit_${order.Circuit_ID}" onclick="removeRecord(this)">Submit</button></td>
                    <td><button type="button" class="btn btn-outline-danger cancel-remove" data-index="${index}" id="Cancel_${order.Circuit_ID}">Cancel</button></td>
                </th>
            </tr>
            <tr id="update-data-${index}" style="display:none;">
                <th colspan="12">
                    <form class="row g-4" method="POST">
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Exchange" value="${order.Exchange}" placeholder="Exchange" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="Circuit_ID" value="${order.Circuit_ID}" placeholder="Circuit Id" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Name" value="${order.Name}" placeholder="Name" required>
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control" name="Address_A" value="${order.Address_A}" placeholder="Address A" required>
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control" name="Address_B" value="${order.Address_B}" placeholder="Address B" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="Contect" value="${order.Contect}" placeholder="Contact">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Connectivity" value="${order.Connectivity}" placeholder="Connectivity">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Cable_Lenght" value="${order.Cable_Lenght}" placeholder="Cable length">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary update-btn" data-index="${index}">Update</button>
                            <button type="button" class="btn btn-dark no-update" data-index="${index}">Close</button>
                        </div>
                    </form>
                </th>
            </tr>
        `;
    });    

    // Update pagination controls
    renderPaginationControls();

    document.querySelectorAll('.edit-data').forEach(button => {
        button.addEventListener('click', function () {
            console.log("button click huwa....")
            const index = this.getAttribute('data-index');
            document.getElementById(`update-data-${index}`).style.display = 'table-row';


            // document.getElementById(`remove-reason-${index}`).style.display = 'none';
        });
    });

    document.querySelectorAll('.remove-data').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            document.getElementById(`remove-reason-${index}`).style.display = 'table-row';

            // document.getElementById(`update-data-${index}`).style.display = 'none';
        });
    });

    document.querySelectorAll('.cancel-remove').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            document.getElementById(`remove-reason-${index}`).style.display = 'none';
        });
    });

    document.querySelectorAll('.remove-confirm').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            // Remove the selected data entry
            data.splice(index, 1);
            // Re-render the table
            renderTable();
        });
    });

    document.querySelectorAll('.no-update').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            document.getElementById(`update-data-${index}`).style.display = 'none';
        });

    });
    // Listen for form submission on the Update buttons
    document.querySelectorAll('.update-btn').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const index = this.getAttribute('data-index');
            const updateForm = document.querySelector(`#update-data-${index} form`);

            const formData = new FormData(updateForm);

            // Fetch request to send updated data to the server
            fetch('../Php/update.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        alert('Record updated successfully');
                        location.reload(); // Reload the page to show the updated data
                    } else {
                        alert('Error: ' + result.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while updating the record.');
                });
        });
    });
}

// Function to render pagination controls
function renderPaginationControls() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = ''; // Clear previous controls

    // Create the Bootstrap pagination structure
    let paginationHtml = `
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>
                </li>`;

    // Generate page numbers dynamically
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>`;
    }

    // Add the Next button
    paginationHtml += `
                <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                    <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>
                </li>
            </ul>
        </nav>`;

    // Insert the pagination controls into the DOM
    paginationControls.innerHTML = paginationHtml;

    // Add event listeners to pagination buttons
    document.querySelectorAll('.page-link').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const page = parseInt(this.getAttribute('data-page'));

            // Ensure the page is within valid range
            if (page > 0 && page <= totalPages) {
                currentPage = page;
                renderTable(); // Re-render the table with the new page
            }
        });
    });
}


// Fetch data from the PHP script
fetch(`../Php/circuit_details.php`)
    .then((response) => response.json())
    .then((fetchedData) => {
        // console.log(fetchedData)
        data = fetchedData; // Store the fetched data
        totalPages = Math.ceil(data.length / recordsPerPage); // Calculate total pages

        renderTable(); // Initial table render for the first page
    })
    .catch((error) => {
        console.error('Error:', error);
    });

document.querySelector('.toggle-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('expand');
});


let removeRecord = function (element) {
    console.log("Remove Record Function Started....");

    let Submit_Button_ID = element.id;
    console.log("Submit Button ID :: ", Submit_Button_ID);

    let Record_ID = Submit_Button_ID.split("_")[1];
    console.log("Record ID :: ", Record_ID);

    let Reason = document.getElementById(`Reason_${Record_ID}`);
    Reason = Reason.value;
    console.log("Remove Reason :: ", Reason);

    let Current_Date_Time = new Date(Date.now());
    let Current_Date_Time_SQL = Current_Date_Time.toISOString().slice(0, 19).replace('T', ' ');

    const data = {
        Reason: Reason,
        Date: Current_Date_Time_SQL,
        Circuit_ID: parseInt(Record_ID)
    };

    console.log("Data to update :: ", data);

    // Create an object to send via AJAX
    try {
        console.log("Data to update :: ", data);
        $.ajax({
            type: 'POST',
            url: '../Php/Circuit_Data_Remove_User.php', // Your PHP file that handles the submission
            data: data, // Send the data object
            success: function (response) {
                console.log("Response :: ", response);
                if (response == "User Removed Successfully!") {
                    alert("User Removed Successfully!");
                    location.reload();
                } else {
                    // MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                    // MessageTR.style.display = 'block';
                }
            },
            error: function () {
                // MessageTR.innerHTML = '<td colspan="6"><h3>An Error is Occured while Updating the Complain Detals</h3></td>'
                // MessageTR.style.display = 'block';
            }
        });
    } catch (e) {
        console.log("Error ::: ", e);
    }


}


let SubmitButton = document.getElementById("NewSubmitButton");

SubmitButton.addEventListener('click', function () {
    console.log("Submit Button Clicked");
    SubmitNewDetails();
})
let SubmitNewDetails = function () {
    // Declaring All the required elements Value
    let Exchange = document.getElementById("Exchange");
    let Circuit_id = document.getElementById("Circuit_id");
    let Name = document.getElementById("Name");
    let Address_A = document.getElementById("Address_A");
    let Address_B = document.getElementById("Address_B");
    let Contect = document.getElementById("Contect");
    let Connectivity = document.getElementById("Connectivity");
    let Cable_Lenght = document.getElementById("Cable_Lenght");

    Exchange = Exchange.value;
    Circuit_id = Circuit_id.value;
    Name = Name.value;
    Address_A = Address_A.value;
    Address_B = Address_B.value;
    Contect = Contect.value;
    Connectivity = Connectivity.value;
    Cable_Lenght = Cable_Lenght.value;

    console.log("Submitting new record in DB");

    const data = {
        Exchange: Exchange,
        Circuit_id: Circuit_id,
        Name: Name,
        Address_A: Address_A,
        Address_B: Address_B,
        Contect: Contect,
        Connectivity: Connectivity,
        Cable_Lenght: Cable_Lenght,
    };

    console.log("Data to Submit :: ", data);
    if (true) {
        // debugger;
        $.ajax({
            type: 'POST',
            url: '../Php/Circuit_Data_Add_New.php', // Your PHP file that handles the submission
            data: data, // Serialize the form data
            // data: $(this).serialize(), // Serialize the form data
            success: function (response) {
                debugger
                console.log("Response ::: ", response)
                if (response == "Your details have been added successfully.") {
                    alert("Your Data has been submitted!!!");
                    location.reload(); // Reload the page to show the updated data
                }

                // $('#AlreadyBooked').text(response); // Display the response message
                // $('#sheetdb-form')[0].reset(); // Reset the form fields
            },
            error: function () {
                // $('#AlreadyBooked').text('An error occurred while submitting the form.');
            }
        });
    }
    console.log("Complain Booked");
    AlreadyBooked.style.display = "block";

}

