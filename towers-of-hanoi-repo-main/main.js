let board = [[5, 4, 3, 2, 1], [], []];

console.log(board);

let gameMaster = {
  moveDisc: function (startingPegIndex, endingPegIndex) {
    // * set the variable startingPeg to equal board[startingPegIndex] which will index into the starting position peg we are going to be in.
    let startingPeg = board[startingPegIndex];

    // *  Here lowestValueIndex is declared and given a placeholder value of 0 in order for us to start the forEach

    let lowestValueIndex = 0;

    // *  running a forEach on startingPeg array which we assigned whatever the startingPegIndex is to startingPeg. This forEach function will iterate through startingPeg array. On each iteration discSize is the item being iterated over and index is the index of the item.

    startingPeg.forEach(function (discSize, index) {
      // *  setting a variable lowestValue to startingPeg[lowestValueIndex]. Right now lowestValueIndex was preset to 0 making it start at the beginning of the chosen starting peg array.

      let lowestValue = startingPeg[lowestValueIndex];

      // * Checking if the lowestValue a.k.a. 1st spot in the chosen starting peg array is higher than discSize

      if (lowestValue > discSize) {
        lowestValueIndex = index;
      }
    });

    let discToBeMoved = startingPeg[lowestValueIndex];

    board[startingPegIndex].splice(lowestValueIndex, 1);

    board[endingPegIndex].push(discToBeMoved);

    console.log(board);
  },

  checkWinner: function (player) {
    if (
      board[1].includes((5, 4, 3, 2, 1)) ||
      board[2].includes((5, 4, 3, 2, 1))
    ) {
      alert("yes");
    } else {
      alert("No");
    }
  }
};
