//1

 function isTimeValid(hours, minutes){
    if( hours>=0 && hours<24 && minutes>=0 && minutes<60) return true;
    else return false;
}

//2

function addMinutes(hours, minutes, addition){
    minutes+=addition;
    while (minutes>59) {hours+=1; minutes-=60}
    if (minutes<10) minutes='0'+minutes;
    if (hours>=24) hours-=24;
    if (hours<10) hours='0'+hours;
    return hours+':'+minutes;
}

//7

function isPointInCircle(x,y) {
    return Math.pow(x-3,2)+Math.pow(y-5,2) <= 16;
}
function isPointInFigure(x,y) {
    check=(x<=-5/3*y+5)&&(x>=7/4*y-7)&&(-12*x-96<=8*y)&&(x<=5/2*y+5);
    return check;


}
