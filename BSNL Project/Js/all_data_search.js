console.log("search started...")


document.getElementById('searchBtn').addEventListener('click', function () {
    let searchInput = document.getElementById('searchInput').value;

    // Fetch data from the PHP script based on search input
    fetch(`../Php/all_data_search.php?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            let tbody = document.getElementById('circuitdata');
            tbody.innerHTML = ''; // Clear existing table rows

            // Check if data is available
            if (data.length > 0) {
                data.forEach((order, index) => {
                    // Append table rows with fetched data
                    tbody.innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
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
             <tr id="update-data-${index}" style="display:none;" >
                <th colspan="12">
                    <form class="row g-4" method="POST">
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Exchange"  value="${order.Exchange}" placeholder="Exchange" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="Circuit_ID"  value="${order.Circuit_ID}" placeholder="Circuit Id" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Name"  value="${order.Name}" placeholder="Name" required>
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control" name="Address_A"  value="${order.Address_A}" placeholder="Address A" required>
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control" name="Address_B"  value="${order.Address_B}" placeholder="Address B" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="Contect"  value="${order.Contect}" placeholder="Contact">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control"  name="Connectivity"  value="${order.Connectivity}" placeholder="Connectivity">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="Cable_Lenght"  value="${order.Cable_Lenght}" placeholder="Cable length">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary update-btn" data-index="${index}">Update</button>
                            <button type="button" class="btn btn-dark no-update" data-index="${index}">Close</button>
                        </div>
                    </form>
                </th>
            </tr>`;
            document.querySelectorAll('.edit-data').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    document.getElementById(`update-data-${index}`).style.display = 'table-row';
                });
            });
        
            document.querySelectorAll('.remove-data').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    document.getElementById(`remove-reason-${index}`).style.display = 'table-row';
                });
            });
        
            document.querySelectorAll('.cancel-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    document.getElementById(`remove-reason-${index}`).style.display = 'none';
                });
            });
        
            document.querySelectorAll('.remove-confirm').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    // Remove the selected data entry
                    data.splice(index, 1);
                    // Re-render the table
                    renderTable();
                });
            });
        
            document.querySelectorAll('.no-update').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    document.getElementById(`update-data-${index}`).style.display = 'none';
                });
            });

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
                });
            } else {
                tbody.innerHTML = '<tr><td colspan="10">No records found</td></tr>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});