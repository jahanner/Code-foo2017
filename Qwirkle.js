//I know I haven't gotten very far on Qwirkle but I thought I would at least show my thought process for making it.
var userScore = 0;
var aIScore = 0;
var numTiles = 108;
var redSquares = 3, redEightStar = 3, redDiamond = 3, redFourStar = 3, redClover = 3, redCircle = 3;
var blueSquares = 3, blueEightStar = 3, blueDiamond = 3, blueFourStar = 3, blueClover = 3, blueCircle = 3;
var greenSquares = 3, greenEightStar = 3, greenDiamond = 3, greenFourStar = 3, greenClover = 3, greenCircle = 3;
var yellowSquares = 3, yellowEightStar = 3, yellowDiamond = 3, yellowFourStar = 3, yellowClover = 3, yellowCircle = 3;
var orangeSquares = 3, orangeEightStar = 3, orangeDiamond = 3, orangeFourStar = 3, orangeClover = 3, orangeCircle = 3;
var purpleSquares = 3, purpleEightStar = 3, purpleDiamond = 3, purpleFourStar = 3, purpleClover = 3, purpleCircle = 3;
var square = [redSquares, blueSquares, greenSquares, yellowSquares, orangeSquares, purpleSquares];
var eightStar = [redEightStar, blueEightStar, greenEightStar, yellowEightStar, orangeEightStar, purpleEightStar];
var diamond = [blueDiamond, redDiamond, greenDiamond, yellowDiamond, orangeDiamond, purpleDiamond];
var fourStar = [redFourStar, blueFourStar, greenFourStar, yellowFourStar, orangeFourStar, purpleFourStar];
var clover = [redClover, blueClover, greenClover, yellowClover, orangeClover, purpleClover];
var circle = [redCircle, blueCircle, greenCircle, yellowCircle, orangeCircle, purpleCircle];
var tiles_in_hand = 6;
//make a clickable table with a drop down menu on every cell containing shape and color option. Subtract type and color upon use from global
//variable. If cell already has input, drop down menu does not exist at that location. If move is possible replace empty cell in table with
//selection. There would be a drop down menu to end the turn. When turn is done, auto fill tiles_in_hand back to 6 with randomly selected
//tiles from numTiles. AI would then randomly place tile moves that are legal or trade from numTiles if there are no moves.
//I used code from 'Phrogz' on stackoverflow here and was going to manipulate it.

// var lastClicked;
// var grid = clickableGrid(10,10,function(el,row,col,i){
//     console.log("You clicked on element:",el);
//     console.log("You clicked on row:",row);
//     console.log("You clicked on col:",col);
//     console.log("You clicked on item #:",i);
//
//     el.className='clicked';
//     if (lastClicked) lastClicked.className='';
//     lastClicked = el;
// });
//
// document.body.appendChild(grid);
//
// function clickableGrid( rows, cols, callback ){
//     var i=0;
//     var grid = document.createElement('table');
//     grid.className = 'grid';
//     for (var r=0;r<rows;++r){
//         var tr = grid.appendChild(document.createElement('tr'));
//         for (var c=0;c<cols;++c){
//             var cell = tr.appendChild(document.createElement('td'));
//             cell.innerHTML = ++i;
//             cell.addEventListener('click',(function(el,r,c,i){
//                 return function(){
//                     callback(el,r,c,i);
//                 }
//             })(cell,r,c,i),false);
//         }
//     }
//     return grid;
// }
