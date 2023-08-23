"use strict";

/*
here as shown in javascript.info 6.3, when the execution of the code is executing the function makeCounter(),
the global Lexical Environment has two properties, one of which is "couter: undefined". But when we console log 
counter, it is giving error saying that is is not initialized.

shouldn't it first check for its own lexical environment and after not finding counter, it should look for outer
lexical environment which is the global lexical environment (which contains the property couter: undefined) ?
*/


// this code is from javascript.info 6.3
function makeCounter(){
    let count = 0;

    console.log(counter);  // this line is added for testing
    return function(){
        return count++;
    }
}

let counter = makeCounter();