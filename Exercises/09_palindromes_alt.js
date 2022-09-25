const isPalindrome = function isPalindrome(readLtoR){
    readRtoL = readLtoR.split("").reverse().join("");
    if(readRtoL === readLtoR){
        return true;
    }
    else return false;
}