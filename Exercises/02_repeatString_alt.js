const repeatString = function(repeatNumber){
    let heyArray = "";
    if(Number.isInteger(repeatNumber) && repeatNumber >= 0){
        for(let i = 0; i < repeatNumber; i++){
            heyArray = "hey" + heyArray;
        }
    	return heyArray;
    }
    else{
        return "ERROR";
    }
};