console.log("UPDATE START.........");

document.addEventListener('DOMContentLoaded', function () {
    // Listen for click events on the Edit buttons
    document.querySelectorAll('.edit-data').forEach(function (button) {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const updateRow = document.getElementById(`update-data-${index}`);
            updateRow.style.display = 'table-row'; // Show the update form
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

    // Listen for click events on the Close buttons to hide the form
    document.querySelectorAll('.no-update').forEach(function (button) {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const updateRow = document.getElementById(`update-data-${index}`);
            updateRow.style.display = 'none'; // Hide the update form
        });
    });
});
