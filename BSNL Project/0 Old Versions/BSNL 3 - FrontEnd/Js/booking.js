let Database = [
    ["079-22612261","kishorsir","Danilimda",9909,"FTTH"],
    [678,"ABC","DL",8899,"FTTH"],
    [234,"Arbaz","Ahmedabad",4001,"FTTH"],
    [456,"Tasin","Sanjar Park",9974,"FTTH"],
    [789,"XYZ","XZA",1234,"FTTH"],
];

let foundRecord = [];

console.log("Script Started.....");

document.addEventListener('DOMContentLoaded', (event) => {
    let PhoneNumber = document.getElementById('TelephoneNumber');
    let SearchButton = document.getElementById('SearchButton');
    let Details = document.getElementById('Details');

    Details.style.display = "none";
    SearchButton.addEventListener('click', function (event) {
        console.log('Input Value :: ' + PhoneNumber.value);
        PhoneNumber.value = PhoneNumber.value +"";
        for(let i=0; i<Database.length;i++){
            if(Database[i][0] ==  PhoneNumber.value){
                foundRecord = Database[i];
                console.log(Database[i]);
                break;
            }
        }
        DisplayFoundRecord();
    });

    function DisplayFoundRecord() {
        console.log("Inside Function....");
        if( foundRecord.length <= 0){
            Details.innerHTML = "Record not found";
        } else {
            Details.innerHTML = "Telephone Number :: " + foundRecord[0] + "<br>Customer Name :: " + foundRecord[1]
        }
        Details.style.display = "block"
    }
});

function hideShow() {
    // Get the elements
    const addressField = document.getElementById('addressField');
    const numberField = document.getElementById('numberField');
 
    // Toggle visibility
    if (addressField.style.display === "none") {
        addressField.style.display = "block";
        numberField.style.display = "block";
    } else {
        addressField.style.display = "none";
        numberField.style.display = "none";
    }
}

// Initially hide the fields (optional)
hideShow();