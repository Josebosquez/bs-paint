/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count < gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
const paletteColors = document.querySelectorAll(".palette-color");
const currentBrushColor = document.querySelector(".current-brush");
const allSquares = document.querySelectorAll(".square");
const canvas = document.querySelectorAll('.canvas');

/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

// For loop going through all palette colors
for (const paletteColor of paletteColors) {

  // When the palette color is clicked, make an add event listener
    paletteColor.addEventListener("click", function(){

    // Get the current brush color class
    const theColorOfTheBrushBefore = currentBrushColor.classList[1];

    // Then the color class of the clicked palette color
    const theColorOfTheBrushAfter = paletteColor.classList[1];

    // Replace the brush's color class with the palette color class
    currentBrushColor.classList.replace(theColorOfTheBrushBefore, theColorOfTheBrushAfter)
})
};

for (const square of allSquares) {

  // Add an event listener that does something when a square is clicked
  square.addEventListener('click', function () {

    // Get the classes of the brush in an array
    const brushClasses = currentBrushColor.className.split(' ');

    // Get the second class of the brush (the color class)
    const brushColor = brushClasses[1];

    // Set the square's class to 'square ' + color-class
    square.className = `square ${brushColor}`;
  });
}



