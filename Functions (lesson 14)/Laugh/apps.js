/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var string = "";
    for(var i=0; i<num; i++){
        string += "ha";
    }
    return string + "!";
}/* finish the function expression */

console.log(laugh(10));
