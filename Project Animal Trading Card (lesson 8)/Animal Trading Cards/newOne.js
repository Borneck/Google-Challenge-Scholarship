
function buildTriangle(y){

	for (var i = 1; i <= y; i++) {
		y = eins
    y += "* "
  }
  return y + "\n"; 
	
	
} 



function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
var eins = console.log(makeLine(2));
console.log(buildTriangle(5);