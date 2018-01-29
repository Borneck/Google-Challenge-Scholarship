/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(row){
	   var tri = "";
	   for (var i = 1; i <= row; i++){
	   	 tri += makeLine(i);
	   	 
	   	 }
	   	 return tri;
	   	 }
	   	 
	   	 console.log(buildTriangle(10));

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
//console.log(buildTriangle(10));