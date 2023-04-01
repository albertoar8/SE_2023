//they print because if statement executes if there is 
//a value different from false in its arguments. 

//this executes
if ("0") console.log('#2 zero (string) is true') 
if (-1) console.log('negative is true') 
if (1) console.log('positive is true')

//this Does NOT execute
//if(false) console.log('false won\'t execute the if')
if (null) console.log('null won\'t run') 
if (0) console.log('#1 (number) zero will not run either')