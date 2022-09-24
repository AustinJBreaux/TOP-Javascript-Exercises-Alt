const leapYear = function leapyear(year){
    if(Number.isInteger(year / 4)){
        return true;
    }
    else{
        return false;
    }
}