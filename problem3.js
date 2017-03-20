//A function that can find the value given a chain and grid
function findValueGivenChain(grid, chain) {
    value = 0;
    for (var i = 0; i < chain.length; i++){
        row = chain[i][0];
        col = chain[i][1];
        value += grid[row][col];
    }
    return value;
}
function searchForArray(haystack, needle){
  var i, j, current;
  for(var i = 0; i < haystack.length; ++i){
    if(needle.toString() === haystack[i].toString()){
      return true;
    }
  }
  return false;
}
function possibleMoves(grid, x, y, chain) {
        var moves = [];
    if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y]) != 'undefined' && !searchForArray(chain,[x+1,y])){
        moves.push([x+1,y]);
    }
    if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y+1]) != 'undefined' && !searchForArray(chain,[x+1,y+1])){
        moves.push([x+1,y+1]);
    }
    if (typeof(grid[x]) != 'undefined' && typeof(grid[x][y+1]) != 'undefined' && !searchForArray(chain,[x,y+1])){
        moves.push([x,y+1]);
    }
    if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y-1]) != 'undefined' && !searchForArray(chain,[x+1,y-1])){
        moves.push([x+1,y-1]);
    }
    if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y]) != 'undefined' && !searchForArray(chain,[x-1,y])){
        moves.push([x-1,y]);
    }
    if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y+1]) != 'undefined' && !searchForArray(chain,[x-1,y+1])){
        moves.push([x-1,y+1]);
    }
    if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y-1]) != 'undefined' && !searchForArray(chain,[x-1,y-1])){
        moves.push([x-1,y-1]);
    }
    if (typeof(grid[x]) != 'undefined' && typeof(grid[x][y-1]) != 'undefined' && !searchForArray(chain,[x,y-1])){
        moves.push([x,y-1]);
    }
    return moves;
}

function boggle(grid, x, y, chain, solutions) {
    var chain2 = chain.slice(0);
    chain2.push([x,y]);
    //Determine if solution
    if (chain2.length > 1 && findValueGivenChain(grid, chain2) == 9){
        solutions.push(chain2);
    }
    //if sum of chain < 9, find available positions
    // Then check if you've been to that position already
    else if (findValueGivenChain(grid, chain2) < 9){
        if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y]) != 'undefined' && !searchForArray(chain2,[x+1,y])){
            solutions.concat(boggle(grid,x+1,y,chain2,solutions));
        }
        if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y+1]) != 'undefined' && !searchForArray(chain2,[x+1,y+1])){
            solutions.concat(boggle(grid,x+1,y+1,chain2,solutions));
        }
        if (typeof(grid[x]) != 'undefined' && typeof(grid[x][y+1]) != 'undefined' && !searchForArray(chain2,[x,y+1])){
            solutions.concat(boggle(grid,x,y+1,chain2,solutions));
        }
        if (typeof(grid[x+1]) != 'undefined' && typeof(grid[x+1][y-1]) != 'undefined' && !searchForArray(chain2,[x+1,y-1])){
            solutions.concat(boggle(grid,x+1,y-1,chain2,solutions));
        }
        if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y]) != 'undefined' && !searchForArray(chain2,[x-1,y])){
            solutions.concat(boggle(grid,x-1,y,chain2,solutions));
        }
        if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y+1]) != 'undefined' && !searchForArray(chain2,[x-1,y+1])){
            solutions.concat(boggle(grid,x-1,y+1,chain2,solutions));
        }
        if (typeof(grid[x-1]) != 'undefined' && typeof(grid[x-1][y-1]) != 'undefined' && !searchForArray(chain2,[x-1,y-1])){
            solutions.concat(boggle(grid,x-1,y-1,chain2,solutions));
        }
        if (typeof(grid[x]) != 'undefined' && typeof(grid[x][y-1]) != 'undefined' && !searchForArray(chain2,[x,y-1])){
            solutions.concat(boggle(grid,x,y-1,chain2,solutions));
    }
    }
    return solutions;
}
//create 2-D array
// var grid = [[3,9,9],[9,3,9],[9,9,3]];
var grid = [];
for (var row = 0 ; row < 3; row++) {
    grid[row] = [];
    for (var col = 0; col < 3; col++) {
        grid[row][col] = Math.floor(Math.random() * 10);
    }
}
//set empty array for chain and solutions
console.log(grid);
console.log(boggle(grid, 0, 0, [], []));
//I can certainly make a version with a larger grid, though slight modifications to the program would need to be made, but the time to
//run the program would increase significanly with every increased grid size.
