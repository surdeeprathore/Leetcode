import assert from "assert";
import { Problem } from "../types/problem";

export const binaryAdditionHandler = (fn: any) => {
    try {
    const tests = [
      { a: "11", b: "1" },
      { a: "1010", b: "1011" },
    ];

    const answers = ["100", "10101"];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].a, tests[i].b);
      assert.equal(result, answers[i]);
    }
    return true;}
    
    catch (error: any) {
    console.log("Error from binaryAdditionHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeBinaryAdditionJS = `function addBinary(a, b) {
  // Write your code here
};`;

export const binaryAddition: Problem = {
  id: "binary-addition",
  title: "8. Binary Addition",
  problemStatement: `<p class='mt-3'>
    Given two binary strings <code>a</code> and <code>b</code>, return their sum as a binary string.
  </p>`,

  examples: [
    {
      id: 0,
      inputText: `a = "11", b = "1"`,
      outputText: `"100"`,
    },
    {
      id: 1,
      inputText: `a = "1010", b = "1011"`,
      outputText: `"10101"`,
    },
  ],

  constraints: `<li class='mt-2'><code>1 <= a.length, b.length <= 10^4</code></li>
    <li class='mt-2'><code>a</code> and <code>b</code> consist only of '0' or '1' characters.</li>
    <li class='mt-2'>Each string does not contain leading zeros except for the zero itself.</li>`,

  starterCode: starterCodeBinaryAdditionJS,
  handlerFunction: binaryAdditionHandler,
  starterFunctionName: "function addBinary(",
  order:8,
};
