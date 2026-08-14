let gameMaster = {
  board: [[5, 4, 3, 2, 1], [], [3]],
  winStatus: [5, 4, 3, 2, 1],
  checkWinner: gameMaster.board[1].every(winStatus) || gameMaster.board[2].every(winStatus),
console.log(gameMaster.checkWinner)
  discMove: (startingPegIndex, endingPegIndex) => {
    // * Players choice of which peg to start on.
    let startingPeg = gameMaster.board[startingPegIndex];

    // * Players choice of which peg to end on.
    let endingPeg = gameMaster.board[endingPegIndex];

    // * value of ending peg
    let destinationTopDiscValue = gameMaster.board[endingPegIndex][endingPeg.length - 1];

    // *
    let topDisc = gameMaster.board[startingPegIndex][startingPeg.length - 1];

    if (endingPeg.length === 0) {
      gameMaster.board[endingPegIndex].push(topDiscValue);
    } else if (destinationTopDiscValue > topDisc) {
      // * value of the disc at end of starting peg array.
      let topDiscValue = startingPeg.pop();

      gameMaster.board[endingPegIndex].push(topDiscValue);
    } else {
      alert("error");
    }
  },

  player: {
    choice: 0
  }
};
