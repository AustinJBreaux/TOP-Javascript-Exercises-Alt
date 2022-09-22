const repeatString = function(repeatNumber){
    let heyArray = "";
    if(Number.isInteger(repeatNumber)){
        for(let i = 0; i < repeatNumber; i++){
            heyArray = "hey" + heyArray;
        }
    	return heyArray;
    }
    else{
        return "ERROR";
    }
};