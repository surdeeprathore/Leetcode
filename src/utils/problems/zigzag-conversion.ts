import assert from "assert";
import { Problem } from "../types/problem";

export const zigzagConversionHandler = (fn: any) => {
  try {
    const tests = [
      { s: "PAYPALISHIRING", numRows: 3 },
      { s: "PAYPALISHIRING", numRows: 4 },
      { s: "A", numRows: 1 },
    ];

    const answers = ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].s, tests[i].numRows);
      assert.equal(result, answers[i]);
    }

    return true;
  } catch (error: any) {
    console.log("Error from zigzagConversionHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeZigzagConversionJS = `function convert(s, numRows) {
  // Write your code here
};`;

export const zigzagConversion: Problem = {
  id: "zigzag-conversion",
  title: "6. Zigzag Conversion",
  problemStatement: `<p class='mt-3'>
    The string <code>s</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
  </p>
  <pre class='bg-dark-200 p-2 rounded'>
P   A   H   N
A P L S I I G
Y   I   R
  </pre>
  <p class='mt-3'>
    And then read line by line: <code>"PAHNAPLSIIGYIR"</code>.
  </p>`,

  examples: [
    {
      id: 0,
      inputText: `s = "PAYPALISHIRING", numRows = 3`,
      outputText: `"PAHNAPLSIIGYIR"`,
    },
    {
      id: 1,
      inputText: `s = "PAYPALISHIRING", numRows = 4`,
      outputText: `"PINALSIGYAHRPI"`,
    },
    {
      id: 2,
      inputText: `s = "A", numRows = 1`,
      outputText: `"A"`,
    },
  ],

  constraints: `<li class='mt-2'><code>1 <= s.length <= 1000</code></li>
    <li class='mt-2'><code>s</code> consists of English letters (lower-case and upper-case), ',' and '.'</li>
    <li class='mt-2'><code>1 <= numRows <= 1000</code></li>`,

  starterCode: starterCodeZigzagConversionJS,
  handlerFunction: zigzagConversionHandler,
  starterFunctionName: "function convert(",
  order:6,
};
