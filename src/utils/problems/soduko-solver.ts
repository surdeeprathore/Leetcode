import assert from "assert";
import { Problem } from "../types/problem";

export const sudokuSolverHandler = (fn: any) => {
  try {
    const tests = [
      {
        board: [
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
      },
    ];

    const answers = [
      [
        ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
        ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
        ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
        ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
        ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
        ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
        ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
        ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
        ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
      ],
    ];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].board);
      assert.deepEqual(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("Error from sudokuSolverHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeSudokuSolverJS = `function solveSudoku(board) {
  // Write your code here
};`;

export const sudokuSolver: Problem = {
  id: "sudoku-solver",
  title: "7. Sudoku Solver",
  problemStatement: `<p class='mt-3'>
    Write a program to solve a Sudoku puzzle by filling the empty cells.
  </p>
  <p class='mt-3'>
    A Sudoku solution must satisfy all of the following rules:
  </p>
  <ul>
    <li>Each of the digits 1-9 must occur exactly once in each row.</li>
    <li>Each of the digits 1-9 must occur exactly once in each column.</li>
    <li>Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.</li>
  </ul>
  <p class='mt-3'>
    The '.' character indicates empty cells.
  </p>`,

  examples: [
    {
      id: 0,
      inputText: `board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]`,
      outputText: `board = [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]`,
    },
  ],

  constraints: `<li class='mt-2'><code>board.length == 9</code></li>
    <li class='mt-2'><code>board[i].length == 9</code></li>
    <li class='mt-2'><code>board[i][j] is a digit or '.'</code></li>
    <li class='mt-2'><code>It is guaranteed that the input board has only one solution.</code></li>`,

  starterCode: starterCodeSudokuSolverJS,
  handlerFunction: sudokuSolverHandler,
  starterFunctionName: "function solveSudoku(",
  order:7,
};
