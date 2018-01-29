"use strict"

$(document).ready(function(){

// call makeGrid()
    function makeGrid() {
    // Creating a table
        let height = $("#input_height").val();
        let width = $("#input_width").val();

        for (let i=0; i<height; i++){
            $("table").append("<tr></tr>");
        }
        for (let j=0; j<width; j++){
            $("tr").append("<td></td>");
        }
    };
    $("#button").click(function(){
        $("tr").remove();
        $("td").remove();
        $(".clearPixelSize").remove();
        makeGrid();        
    });

    // Old table remove
    function removeTable(){
        $("tr").remove();
        $("td").remove();
    };
    $("#clearButton").click(function(){
        removeTable();
        $(".clearPixelSize").remove();
    });

    // Pick up a color
    $("table").on("click","td", function() {
        let color = $("#colorPicker").val();
         if ($(this).attr("bgcolor") == color) {
            $(this).removeAttr("bgcolor");
         } else {
            $(this).attr("bgcolor", color)
         }         
       });

    //choosing color
    $("#pixel_canvas td").click(function() {
        let color = $("#colorPicker").val();  
        $(this).css("background-color", color);
    });

    //removing color
    $("#pixel_canvas td").dblclick(function() { 
        $(this).css("background-color", "");
    });
});

