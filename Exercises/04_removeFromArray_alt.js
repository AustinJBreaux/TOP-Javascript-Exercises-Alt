//When calling the function, enter the array to subtract from as
//the first argument, followed by arrays to remove, then strings
const removeFromArray = function x(givenArray, removedArray, removedString){
    givenArray = givenArray.filter(fxn => fxn != removedArray || removedString);
    return givenArray;
    }
