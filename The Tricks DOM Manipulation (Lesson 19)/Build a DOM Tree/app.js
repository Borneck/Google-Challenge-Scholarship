/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
$(document).ready(function(){

    let family2 = $.parseHTML("<div id='family2'><h1>Family2</h2></div>");
    $("#family1").after(family2);

    let bruce = $.parseHTML("<div id='bruce'><h2>Bruce</h2></div>");
    $("#family2").append(bruce);

    let madison = $.parseHTML("<div id='madison'><h3>Madison</h3></div>");
    $("#bruce").append(madison);

    let hunter = $.parseHTML("<div id='hunter'><h3>Hunter</h3></div>");
    $("#bruce").append(hunter);

  
});
