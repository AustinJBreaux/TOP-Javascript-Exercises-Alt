const sumNumbers = function sum(lower, upper){
    if(lower > upper){//Switch upper and lower variables if lower > upper
        temp = lower;
        lower = upper;
        upper = temp;
        let counter = lower;
        let accumulatedValue = lower;
        if(lower > 0 && !isNaN(lower) &&
        upper > 0 && !isNaN(upper)){
            do{
                counter = counter +1;
                accumulatedValue = accumulatedValue + counter;
            }
            while(counter != upper){
                return accumulatedValue;
            }
        }
        else return "Error";
    }
    let counter = lower;
        let accumulatedValue = lower;
        if(lower > 0 && !isNaN(lower) &&
        upper > 0 && !isNaN(upper)){
            do{
                counter = counter +1;
                accumulatedValue = accumulatedValue + counter;
            }
            while(counter != upper){
                return accumulatedValue;
            }
        }
        else return "Error";
}