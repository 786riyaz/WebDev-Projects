let currentTime = Date.now();
console.log("Current Time in JavaScript :: ", currentTime);

const dateString = temp.date; // Ensure temp.date is in a valid format
console.log("Database Date :: ", dateString);
console.log(typeof (dateString));

// Create dateObject from the dateString
const dateObject = new Date(dateString.replace(" ", "T"));
console.log("Object :: ", dateObject);

// Create a new date object for the static date string
// const dateString1 = "Sun Sep 29 2024 22:38:53 GMT+0530 (India Standard Time)";
const dateString1 = dateObject;
const dateObject2 = new Date(dateString1);

// Calculate the Unix timestamps
const unixEpoch = dateObject2.getTime();
const unixEpochInSeconds = Math.floor(unixEpoch / 1000);
console.log("Seconds :: ", unixEpochInSeconds);

// Calculate the current time as a Date object and get its Unix timestamp
const currentUnixEpoch = Date.now(); // This is already in milliseconds
const currentUnixEpochInSeconds = Math.floor(currentUnixEpoch / 1000);

// Calculate the difference in seconds
const differenceInSeconds = currentUnixEpochInSeconds - unixEpochInSeconds;
console.log("Difference in Seconds :: ", differenceInSeconds);
console.log("Difference in Hours :: ", differenceInSeconds / 3600);
temp.duration = Math.floor(differenceInSeconds / 3600);