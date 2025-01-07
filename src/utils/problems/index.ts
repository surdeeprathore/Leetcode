import { jumpGame } from "./jump-game";
import { Problem } from "../types/problem";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { zigzagConversion } from "./zigzag-conversion";
import { sudokuSolver } from "./soduko-solver";
import { binaryAddition } from "./addBinary";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	   "zigzag-conversion" :zigzagConversion,
	 "reverse-linked-list": reverseLinkedList,
	 "jump-game": jumpGame,
	 "search-in-a-matrix": search2DMatrix,
	 "valid-parentheses": validParentheses,
	  "soduko-solver":sudokuSolver,
	  "add-binary":binaryAddition
};
