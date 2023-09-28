"use strict";

console.log('before return');
return ;  // in browser, it will give error (check doubt_return_statement.html)
console.log('after return');  // in node, it will not give error and work as if it is in a function and not print this line