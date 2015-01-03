var board, currentPlayer;

var resetBoard = function () {
  board = [
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    ['wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X '],
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X '],
    [' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ', 'red'],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ']
  ];

  currentPlayer = 'wht';

  $(document).trigger('boardChange');
};

var selectSquare = function(row, col) {
  if (board[row][col] === ' X ') {
    $(document).trigger('invalidMove', "You selected an empty spot.");
  }
};


//This will take in a pair of coordinates.  The first pair represents
//the starting position of a piece you want to move.  The second represents
//the position that you want it to move to.  The function will check if the
//move is valid.  If it is, it will execute. Otherwise, it will error out.
var attemptMove = function(row1, col1, row2, col2) {

};



//This will execute the movement of the piece.  Helper function called by attemptMove.
var makeMove = function(row1, col1, row2, col2) {

};


//This function will remove the piece at the given coordinate. Helper function called
//by attemptMove.
var removePiece = function(row,col) {

};

