console.log("Script Started.....");

document.addEventListener('DOMContentLoaded', (event) => {
    let TelePhoneNumber = document.getElementById('TelephoneNumber');
    let SearchButton = document.getElementById('SearchButton');
    let Details = document.getElementById('Details');

    Details.style.display = "none";

    SearchButton.addEventListener('click', function (event) {
        console.log('Input Value :: ' + TelePhoneNumber.value);
        TelePhoneNumber = TelePhoneNumber.value + "";
        sendAjaxRequest();
    });

    function sendAjaxRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Handle the response from your PHP script here
                console.log(xhr.responseText);
            }
        };
        xhr.send("telephoneNumber=" + TelePhoneNumber); // Send data to your PHP script
    }
});
