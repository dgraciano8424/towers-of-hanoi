console.log("file loaded");
let gameMaster = {
  board: [[], [], [5, 4, 3, 2, 1]],

  // *  this.board.map([[5, 4, 3, 2, 1], [], []]),

  discMove(startingPegIndex, endingPegIndex) {
    // * Players choice of which peg to start on.
    let startingPeg = this.board[startingPegIndex];

    // * Players choice of which peg to end on.
    let endingPeg = this.board[endingPegIndex];

    // * value of starting peg top disc
    let topDisc = startingPeg[startingPeg.length - 1];

    // * value of ending peg top disc
    let endingPegTopDiscValue = endingPeg[endingPeg.length - 1];

    if (endingPeg.length === 0 || endingPegTopDiscValue > topDisc) {
      // * value of the disc at end of starting peg array.
      let topDiscValue = startingPeg.pop();

      // * pushes starting peg disc onto ending peg.
      endingPeg.push(topDiscValue);

      // * winner check
      this.checkWinner(endingPeg);
    } else {
      alert("Ending peg disc is smaller than the current disc in hand");
    }
  },

  checkWinner(peg) {
    let value = peg.every((disc, index) => {
      let winStatus = [5, 4, 3, 2, 1];
      return disc === winStatus[index];
    });

    if (value === true && peg.length === 5) {
      return true;
    } else {
      console.log("you have done fucked up");
      return false;
    }
  }

  // * player: {
  // *   choice: this.board.map()
  // * }
};
