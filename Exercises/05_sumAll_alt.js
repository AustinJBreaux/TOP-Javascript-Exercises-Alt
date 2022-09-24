const sumNumbers = function sum(lower, upper){
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