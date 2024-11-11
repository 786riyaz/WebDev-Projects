console.log("download js startssss....")


fetch(`../Php/circuit_details.php`)
    .then((response) => response.json())
    .then((fetchedData) => {
        // console.log(fetchedData)

        let downloadBtn = document.getElementById('downloadBtn');

        function exportJsonToExcel() {
            // Create a new workbook
            const workbook = XLSX.utils.book_new();

            // Convert JSON data to a worksheet
            const worksheet = XLSX.utils.json_to_sheet(fetchedData);

            // Append the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

            // Export the workbook as an Excel file
            XLSX.writeFile(workbook, "data.xlsx");
        }

        // Event listener for the export button
        document.getElementById("downloadBtn").addEventListener("click", exportJsonToExcel);
    })

    
fetch(`../Php/complain_fetch_unresolved.php`)
.then((response) => response.json())
.then((fetchedData) => {
    // console.log(fetchedData)

    let PendingFaults = document.getElementById('PendingFaults');

    function exportJsonToExcel() {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Convert JSON data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(fetchedData);

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Export the workbook as an Excel file
        XLSX.writeFile(workbook, "data.xlsx");
    }

    // Event listener for the export button
    document.getElementById("PendingFaults").addEventListener("click", exportJsonToExcel);
})



fetch(`../Php/Complain_Fetch_Completed.php`)
    .then((response) => response.json())
    .then((fetchedData) => {
        // console.log(fetchedData)

        let CompleteFaults = document.getElementById('CompleteFaults');

        function exportJsonToExcel() {
            // Create a new workbook
            const workbook = XLSX.utils.book_new();

            // Convert JSON data to a worksheet
            const worksheet = XLSX.utils.json_to_sheet(fetchedData);

            // Append the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

            // Export the workbook as an Excel file
            XLSX.writeFile(workbook, "data.xlsx");
        }

        // Event listener for the export button
        document.getElementById("CompleteFaults").addEventListener("click", exportJsonToExcel);
    })

    

