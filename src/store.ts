import { defineStore } from "pinia";
import Mexp from "math-expression-evaluator";

export const useCalculatorStore = defineStore("calculator-store", {
  state: () => {
    return { expression: "", answer: "", lastParenChar: "" };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addEntry(value: string) {
      this.expression += value;
    },
    nextParen(): string {
      console.log(`lastIndexOf "(": ${this.expression.lastIndexOf("(")}`);
      console.log(`lastIndexOf ")": ${this.expression.lastIndexOf(")")}`);
      if (this.expression.lastIndexOf("(") == -1) {
        return "(";
      }
      if (this.expression.lastIndexOf("(") == this.expression.length - 1) {
        return "(";
      }
      if (this.expression.lastIndexOf("(") < this.expression.lastIndexOf(")")) {
        return "(";
      } else {
        return ")";
      }
    },
    clear() {
      this.expression = "";
      this.answer = "";
    },
    backspace() {
      this.expression = this.expression.slice(0, -1);
    },
    evaluate() {
      if (this.answer !== "") {
        this.expression = this.answer;
        this.answer = "";
      } else {
        let expression = cleanUpExpression(this.expression);
        const mexp = new Mexp();
        let lexed = mexp.lex(expression, []);
        let postFixed = mexp.toPostfix(lexed);
        this.answer = mexp.postfixEval(postFixed, {}).toString();
      }
    },
  },
});

function cleanUpExpression(input: string): string {
  input = input.replace(/×/g, "*");
  input = input.replace(/÷/g, "/");
  input = input.replace(/π/g, "pi");
  input = input.replace(/%/g, "Mod");
  return input;
}
