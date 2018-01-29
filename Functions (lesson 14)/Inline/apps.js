/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy" , function(num){
    var laugh = "";
    for(var i = 0; i < num; i++){
      laugh += "ha";
    }
    return laugh + "!";
});