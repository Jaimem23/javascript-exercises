const reverseString = function(string) {
    let stringChars = [];
    let joinedString = "";
    for (i = 0; i < string.length;i++ ){
        stringChars = stringChars.concat(string[i]);
    }
    stringChars.reverse();
    for(i= 0;stringChars.length > i;i++){
        joinedString += stringChars[i];
        
    }
    
    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
