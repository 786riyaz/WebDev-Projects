function digitalClock() {
    let dateTime = new Date();

    let hrs = dateTime.getHours();
    let mins = zero(dateTime.getMinutes());
    let sec = zero(dateTime.getSeconds());
    // console.log(hrs + " :: " + mins + " :: " + sec);

    let session = document.getElementById("session");

    if(hrs >= 12){
        session.innerHTML = '(PM)';
    } else {
        session.innerHTML = '(AM)';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById("hours").innerHTML = zero(hrs);
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;
}

function zero(num){
    return num<10?"0"+num:num;
}

setInterval(digitalClock,100)