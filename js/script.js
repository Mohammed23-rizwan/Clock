const display = document.querySelector('.clock');
function timer_clock(){
    var timer = new Date();
    var hours = timer.getHours();
    var minutes =timer.getMinutes();
    var seconds = timer.getSeconds();
    var txt = "AM"
    if(hours>12){
        hours = hours-12;
        txt = "PM"
    }else if(hours==0){
        hours = 12;
        txt = "AM"
    }
    var hours = hours<10?"0"+ hours:hours;
    var minutes =minutes<10?"0"+minutes:minutes;
    var seconds = seconds<10?"0"+seconds:seconds;
    display.innerHTML = (`${hours} : ${minutes} : ${seconds}`)
}

setInterval(timer_clock,1000)