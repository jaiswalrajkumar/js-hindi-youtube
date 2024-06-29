const accountId =144553
let accountEmail="jaiswal@google.com"
var accountPassword="12345"
accountCity="Jaipur" //without var defined is wrong way
var accountstate;
// accountId = 2 // not allowed
accountEmail="hd@fc.com"
accountPassword="123"
accountCity="Bengalore"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

 console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])

