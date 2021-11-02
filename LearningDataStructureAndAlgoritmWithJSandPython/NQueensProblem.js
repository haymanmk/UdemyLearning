NQueens(4);
// console.log()

function NQueens(n) {
  // build an empty array
  let table = [];
  for (let i = 0; i < n; i++) {
    table.push([]);
    for (let j = 0; j < n; j++) {
      table[i].push(null);
    }
  }
  // console.log(table);

  let i = 0; //row
  let j = 0; //column
  let k = 0; //pointer to place the rest of Queens
  let searching = true;
  let violation = false;
  let perfection = 0;

  while (searching) {
    violation = false;
    // place a Queen in table
    if (i < n && j < n) {
      table[i][j] = "Q";
    }
    //verifying in column direction
    while (k < i) {
      if (table[k][j] === "Q") {
        violation = true;
      }
      k++;
    }

    //reset k as 0
    k = 0;
    //verifying in row direction
    while (k < j) {
      if (table[i][k] === "Q") {
        violation = true;
        break;
      }
      k++;
    }

    //reset k as 1
    k = 1;
    //verifying in diagonal direction from top right to bottom left
    while (i + k < n && j - k >= 0) {
      if (table[i + k][j - k] === "Q") {
        violation = true;
        break;
      }
      k++;
    }

    //reset k as 1
    k = 1;
    //verifying in diagonal direction from top left to bottom right
    while (i - k >= 0 && j - k >= 0) {
      if (table[i - k][j - k] === "Q") {
        violation = true;
        break;
      }
      k++;
    }

    console.log(i + " " + j + ":");
    if (violation) {
      table[i][j] = null;
      console.log("Violation occurred.");
      i++;
    } else {
      console.log("It's OK to put here.");
      console.log(table);
      if (j === n - 1) {
        perfection++;
        console.log("There's a perfection meet.");
        table[i][j] = null;
        i++;
        j = 0;
      } else {
        j++;
        i = 0;
      }
    }

    while (i >= n) {
      checkPrevious();
      if (j < 0) {
        searching = false;
        console.log("The number of perfections is " + perfection);
      }
    }

    function checkPrevious() {
      j--;
      for (let b = n - 1; b >= 0; b--) {
        if (table[b][j] === "Q") {
          table[b][j] = null;
          i = b + 1;
          console.log("back track to " + b + " " + j);
        }
      }
    }
  }
}
