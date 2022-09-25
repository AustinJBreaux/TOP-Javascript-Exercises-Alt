const isPalindrome = function isPalindrome(readLtoR){
    let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    readLtoR = readLtoR.toLowerCase();
    readLtoR = readLtoR.replace(punctuation, "");
    readRtoL = readLtoR.split("").reverse().join("");
    readRtoL = readRtoL.toLowerCase();
    readRtoL = readRtoL.replace(punctuation, "");
    console.log(readRtoL)
    if(readRtoL === readLtoR){
        return true;
    }
    else return false;
}