/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

function hasEnoughPlayers(test){
  
    var mind = 7;
    if(mind <= test.length){
    test =   true;
    }else {
    test =   false;
    }
    return test;
  }
  
  
  
  
  var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
  console.log(hasEnoughPlayers(team));