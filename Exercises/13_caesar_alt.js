/*
Pseudo: For every letter entered (case sensitive), given an integer, change 
    the letters by + or - the integer
Split given sentence/letters
foreach letter, if uppercase use uppercase letters, for lowercase
    use lowercase letters, iterate through the alphabet by increasing
    or decreasing the index number
Make sure when the index ticks above or below 0-25, it loops to either end
    (Both negative and positive)
Push the edited letters back to a single array
Return that array
*/

    /* To do:
    Take the change argument, if between -26-0 iterate the modifyUppercase/
        modifyLowercase functions in the negative direction. If between 0-26,
        iterate in the positive. If greater than 26 or less than 26, figure
        out something to either get the remainder of the change argument 
        divided by 26, or when the index change = 26/-26, set to 0 
        and continue iterating. I'm leaning towards that second option

    */  
      
const caesar = function caesar(sentence, change){
    start();
//Code below

// Letters grouped in 5s for ease of counting

uppercaseLetters = [
"A", "B", "C", "D", "E", //5
"F", "G", "H", "I", "J", //10
"K", "L", "M", "N", "O", //15
"P", "Q", "R", "S", "T", //20
"U", "V", "W", "X", "Y", "Z"];//26
lowercaseLetters = [
"a", "b", "c", "d", "e", //5
"f", "g", "h", "i", "j", //10
"k", "l", "m", "n", "o", //15
"p", "q", "r", "s", "t", //20
"u", "v", "w", "x", "y", "z"];//26

    function start(uppercaseLetters, lowercaseLetters){
        separateLetters = sentence.split('');
        newSentence = [];
        separateLetters.forEach((newLetter) => {
            if(newLetter.includes(uppercaseLetters)){
                modifyUppercase(newLetter);
            }
            else if(newLetter.includes(lowercaseLetters)){
                modifyLowercase(newLetter);
            }
            else newSentence.push(newLetter);
        });
        console.log(newSentence.join(''))
    }

    function modifyUppercase(){
        index = uppercaseLetters.indexOf(newLetter);
        if(change > 0){
            for(let i = 0; i < change; i++){
            if(index > 25){
                    let index = 0;
                    index ++;
            }
                else index++;
            };
        newSentence.push(uppercaseLetters[index]);
        }
        else if(change < 0){
            for(let i = 0; i > change; i--){
                if(index < -25){
                    let index = 0;
                    index--;
            }
            else index--;
            }
        newSentence.push(uppercaseLetters[Math.abs(index)])
        }
    }

    function modifyLowercase(){
        index = lowercaseLetters.indexOf(newLetter);
        if(change > 0){
            for(let i = 0; i < change; i++){
            if(index > 25){
                    let index = 0;
                    index ++;
            }
                else index++;
            }
        newSentence.push(lowercaseLetters[index]);
        }
        else if(change < 0){
            for(let i = 0; i > change; i--){
                if(index < -25){
                    let index = 0;
                    index--;
            }
            else index--;
            }
        newSentence.push(lowercaseLetters[Math.abs(index)])
        }
    }
}