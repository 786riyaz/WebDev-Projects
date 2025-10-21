console.log("Test Started .....");
let Current_Date_Time = new Date(Date.now());
console.log("Current Date Time :: ", Current_Date_Time);


// MySQL = '2024-10-01 07:59:46'
let Current_Date_Time_SQL = Current_Date_Time.toISOString().slice(0, 19).replace('T', ' ');
console.log("MySQL Format :: " + Current_Date_Time_SQL);

console.log("Complain Updated");
// AlreadyBooked.style.display = "block";

// });