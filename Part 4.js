/* Justin Yeung CWID:50018281
CSIT537: JavaScript Discussion Exercise 
Part 4: Write a JavaScript program which will display two images on the web page.
When a mouse cursor hovers over any of these two images, the locations of these two images 
will randomly change and move to other locations. */

let img = document.getElementById("img");
let img2 = document.getElementById("img2");

$("#img").mouseover(function() {
  var newXCoordinate = Math.floor(Math.random() * 300);
  var newYCoordinate = Math.floor(Math.random() * 300);
  $("#img").animate({
    marginLeft: newXCoordinate + "px",
    marginTop: newXCoordinate + "px"
  }, 200);
  $("#img2").animate({
    marginLeft: newXCoordinate + "px",
    marginTop: newYCoordinate + "px"
  }, 200);
});

$("#img2").mouseover(function() {
  var newXCoordinate = Math.floor(Math.random() * 300);
  var newYCoordinate = Math.floor(Math.random() * 300);
  $("#img").animate({
    marginLeft: newXCoordinate + "px",
    marginTop: newYCoordinate + "px"
  }, 200);
  $("#img2").animate({
    marginLeft: newXCoordinate + "px",
    marginTop: newYCoordinate + "px"
  }, 200);
});