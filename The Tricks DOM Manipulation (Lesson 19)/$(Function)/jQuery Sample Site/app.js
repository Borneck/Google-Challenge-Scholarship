/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!


Für dieses Quiz können Sie dieses Skript verwenden, das im <head> von index.html verlinkt ist.
das langweilige Platzhalterbild auf ein Bild eines niedlichen Tieres zu ändern?

Denken Sie daran, dass Sie eine Funktion zur Ausführung des jQuery-Objekts übergeben müssen
wenn das Dokument fertig ist.

Leider ist Placepuppy nicht mehr verfügbar. Hier ist ein Link zu einem zufälligen
Tierbild auf Lorempixel.com:
http://lorepixel.com/350/150/tiere/

Viel Glück!
*/

$(function(){
   $("img").attr("src", "http://placepuppy.it/350/150");
});
