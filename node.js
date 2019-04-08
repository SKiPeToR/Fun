//1
function isTimeValid(minutes,seconds){
    if (minutes<24 && minutes>=0 && seconds<60 && seconds>=0){
        return true;
    } else return false;
}

//2
function addMinutes(hours, minutes, addminutes){
    var m='0';
    minutes+=addminutes;
    if(minutes>59) { minutes-=60; hours+=1;}
    if(hours>23) {hours-=24;}
    if(hours<10) m+=String(hours);
    else m=String(hours);
    m+=":";
    if(minutes<10) m+="0"+String(minutes);
    else m+=String(minutes);
    return(m);
}

//3
function getSeason(month){
    switch(month){
        case 12:
        case 1:
        case 2: return "Зима"; break;
        case 3:
        case 4:
        case 5: return "Весна"; break;
        case 6:
        case 7:
        case 8: return "Лето"; break;
        case 9:
        case 10:
        case 11: return "Осень"; break;
        default: return "Неверный месяц";
    }
}

//4
function getDayDeclension(day){
    day=day%100;
    if(day>10 && day<15) return "Дней";
    else {
        switch(day%10){
            case 1: return "День"; break;
            case 2: case  3: case 4: return "Дня"; break;
            default: return "Дней";
        }
    }
}

//5
function getSumm(namber){
    var summ=0;
    for(var count=1;count<=namber;count++) summ+=count;
    return summ;
}

//5 , вторая домашка (рекурсия)
function getSummRec(namber){
    if (namber>0) return (namber+getSummRec(--namber));
    else return 0;
}

//6
function getMultiplicationTable(namber){
    for(var count=1;count<=10;count++)
        console.log(namber+" * "+count+" = "+count*namber);
}

//7_КРУГ
function isPointInCircle(x,y){
    if ( Math.pow((x-3),2)+Math.pow((y-5),2)<=16) return true;
    else return false;
}

//7_Четырехугольник
function isPointInShape(x,y){
    if (x+1.7*y<=5 && (x-1.75*y>=-7) && (1.25*x+y>=-10) && (x-2.5*y<=5)) return true;
    else return false;
}
