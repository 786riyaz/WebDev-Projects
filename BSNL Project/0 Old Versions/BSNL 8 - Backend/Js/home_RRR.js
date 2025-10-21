console.log("Home Script Started ....");
let DatabaseRecords = [];
let TempRecords = [];


let setCurrentMonthAndYear = function () {
    let CurrentMonthYear = new Date(Date.now()) + "";

    let CurrentMonth = CurrentMonthYear.split(" ")[1];
    let CurrentYear = CurrentMonthYear.split(" ")[3];

    let monthDD = document.getElementById("monthDD");
    monthDD.value = CurrentMonth;

    let yearDD = document.getElementById("yearDD");
    yearDD.value = CurrentYear;
}

let setCountInUI = function () {
    let pendingCount = 0, completeCount = 0;
    for (let i = 0; i < TempRecords.length; i++) {
        if (TempRecords[i].Is_Resolved == "1") { completeCount++; }
        if (TempRecords[i].Is_Resolved == "0") { pendingCount++; }
    }
    document.getElementById("TotalFaults").innerText = TempRecords.length;
    document.getElementById("CompleteFaults").innerText = completeCount;
    document.getElementById("PendingFaults").innerText = pendingCount;
}

let FetchComplainRecords = function () {
    fetch(`../Php/home.php`)
        .then((response) => response.json())
        .then((data) => {
            // console.log("Received Data :: ", data);
            DatabaseRecords = data;
            TempRecords = data;
            setCountInUI();
        })
}
FetchComplainRecords();

// Setting Current Month and Year in the DropDown
setCurrentMonthAndYear();

document.getElementById("FetchButton").addEventListener("click", function () {
    tempData = [];
    year = document.getElementById("yearDD").value;
    month = document.getElementById("monthDD").value;
    switch(month){
        case "Jan" : month = "01";        break;
        case "Feb" : month = "02";        break;
        case "Mar" : month = "03";        break;
        case "Apr" : month = "04";        break;
        case "May" : month = "05";        break;
        case "Jun" : month = "06";        break;
        case "July" : month = "07";        break;
        case "Aug" : month = "08";        break;
        case "Sept" : month = "09";        break;
        case "Oct" : month = "10";        break;
        case "Nov" : month = "11";        break;
        case "Dec" : month = "12";        break;
    }

    for(let i=0; i<TempRecords.length;i++){
        let currentData = TempRecords[i].Resolution_Date_Time;
        console.log(currentData);
        let currentYear = currentData.split("-")[0];
        let currentMonth = currentData.split("-")[1];

        if(currentMonth == month && currentYear == year){
            tempData.push(TempRecords[i]);
        }
    }
    TempRecords = tempData;
    setCountInUI();

})

let FetchUserRecords = function () {
    fetch(`../Php/home_UserDataFetch.php`)
        .then((response) => response.json())
        .then((data) => {
            // console.log("Received Data :: ", data);
            document.getElementById("TotalOrder").innerText = data.length;
        })
}
FetchUserRecords();