const removeFromArray = function(array){
    
   
   
    
    for (i = 1; i< arguments.length; i++) {
        
       
            
            let index = array.indexOf(arguments[i]);

            if(index >= 0) array.splice(index, 1);
        
    
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
