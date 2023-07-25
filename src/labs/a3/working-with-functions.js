import React from "react";
import ArrowFunctions from "./arrow-function";
import ES5Functions from "./es5-functions";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import ImpliedReturn from "./implied-return";

function WorkingWithFunctions() {
  return (
    <div>
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
    </div>
  );
}

export default WorkingWithFunctions;
