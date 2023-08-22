const sumAll = function(num1,num2) {
   let addition = 0; 
   //See if it's negative
    if(num1 < 0 || num2 < 0||typeof num1 != "number"||typeof num2 != "number") return "ERROR";
    
    if(num1 < num2){
        
        for( ;num1 <= num2; num1++){
            addition += num1;
        }
        return addition;
    }
    else{
        for( ;num1 >= num2; num1--){
            addition += num1;
        }
        return addition;
    }
   
};

// Do not edit below this line
module.exports = sumAll;
