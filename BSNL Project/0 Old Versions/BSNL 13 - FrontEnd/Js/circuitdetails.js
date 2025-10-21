// console.log("started a.......")



// // console.log("started asdsdsd.......")
const recordspage = 20;
let currentpage = 1;


// Fetch data from the PHP script
fetch(`../Php/circuit_details.php`)
    .then((response) => response.json())
    .then((data) => {
        let tbody = document.getElementById('circuitdata');
        
        tbody.innerHTML = ''; // Clear existing content

        // Loop through the data and generate table rows
        data.forEach((order, index) => {
            tbody.innerHTML += `
                <tr>  
                    <td>${order.sr_no}</td>
                    <td>${order.Exchange}</td>
                    <td>${order.Circuit_ID}</td>
                    <td>${order.Name}</td>
                    <td>${order.Address_A}</td>
                    <td>${order.Address_B}</td>
                    <td>${order.Contect}</td>
                    <td>${order.Connectivity}</td>
                    <td>${order.Cable_Lenght}</td>
                    <td>${order.work_order_date}</td>
                    <td><button type="button" class="btn btn-outline-danger edit-data" data-index="${index}">Edit</button></td>
                    <td><button class="btn btn-outline-dark remove-data" data-index="${index}">Remove</button></td>
                </tr>
                <tr id="remove-reason-${index}" style="display:none;">
                    <th colspan="10">
                        <div class="input-group mb-3">
                            <span class="input-group-text">Reason</span>
                            <input type="text" class="form-control">
                        </div>
                        <td><button type="button" class="btn btn-outline-danger remove-confirm" data-index="${index}">Remove</button></td>
                        <td><button type="button" class="btn btn-outline-danger cancel-remove" data-index="${index}">Cancel</button></td>
                    </th>
                </tr>
                <tr id="update-data-${index}" style="display:none;">
                    <th colspan="12">
                        <form class="row g-4">
                            <div class="col-md-4">
                                <input type="email" class="form-control" placeholder="Exchange" required>
                            </div>
                            <div class="col-md-4">
                                <input type="email" class="form-control" placeholder="Circuit Id" required>
                            </div>
                            <div class="col-md-4">
                                <input type="password" class="form-control" placeholder="Name" required>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Address A" required>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Address B" required>
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Contact">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Connectivity">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Cable length">
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <button type="button" class="btn btn-dark no-update" data-index="${index}">Close</button>
                            </div>
                        </form>
                    </th>
                </tr>
            `;
        });

        // Event listeners for remove and edit buttons
        document.querySelectorAll('.remove-data').forEach(button => {
            button.addEventListener('click', function() {
                let index = this.getAttribute('data-index');
                document.getElementById(`remove-reason-${index}`).style.display = '';
            });
        });

        document.querySelectorAll('.cancel-remove').forEach(button => {
            button.addEventListener('click', function() {
                let index = this.getAttribute('data-index');
                document.getElementById(`remove-reason-${index}`).style.display = 'none';
            });
        });

        document.querySelectorAll('.edit-data').forEach(button => {
            button.addEventListener('click', function() {
                let index = this.getAttribute('data-index');
                document.getElementById(`update-data-${index}`).style.display = '';
            });
        });

        document.querySelectorAll('.no-update').forEach(button => {
            button.addEventListener('click', function() {
                let index = this.getAttribute('data-index');
                document.getElementById(`update-data-${index}`).style.display = 'none';
            });
        });
        
    })

    .catch((error) => {
        console.error('Error:', error);
    });
 
    document.querySelector('.toggle-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('expand');
    });
    