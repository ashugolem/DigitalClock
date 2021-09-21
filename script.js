setInterval(() => {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    



    if((hrs == 1)||(hrs == 2)||(hrs == 3)||(hrs == 4)||(hrs == 5)||(hrs == 6)||(hrs == 7)||(hrs == 8)||(hrs == 9)||(hrs == 0)){
        document.getElementById("hour").innerHTML = "0" + hrs;
    }
    else{
        document.getElementById("hour").innerHTML = hrs;
    }
    if((min == 1)||(min == 2)||(min == 3)||(min == 4)||(min == 5)||(min == 6)||(min == 7)||(min == 8)||(min == 9)||(min == 0)){
        document.getElementById("minute").innerHTML = "0" + min;
    }
    else{
        document.getElementById("minute").innerHTML = min;
    }
    if((sec == 1)||(sec == 2)||(sec == 3)||(sec == 4)||(sec == 5)||(sec == 6)||(sec == 7)||(sec == 8)||(sec == 9)||(sec == 0)){
        document.getElementById("second").innerHTML = "0" + sec;
    }
    else{
        document.getElementById("second").innerHTML = sec;
    }
}, 1000);

setInterval(animationsecond, 1000);
var second = document.getElementById("second");
function animationsecond() {
    second.style.animation = `animate 1s linear infinite`;
}




setInterval(() => {
    let timee = new Date();
    let hrss = timee.getHours();
    let minn = timee.getMinutes();
    let secc = timee.getSeconds();
    if (secc == 59) {
        var minute = document.getElementById("minute");
        minute.style.animation = `animate 1s linear infinite`;
    }
    else{
        var minute = document.getElementById("minute");
        minute.style.animation = `normal 1s linear infinite`;
    }
    if (minn == 59) {
        var minute = document.getElementById("hour");
        minute.style.animation = `animate 1s linear infinite`;
    }
    else{
        var minute = document.getElementById("hour");
        minute.style.animation = `normal 1s linear infinite`;
    }
}, 1000);



