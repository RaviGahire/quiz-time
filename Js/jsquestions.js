const jsQuestions = [
  {
    question: "1. What is the output of `typeof null` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: "'object'"
  },
  {
    question: "2. Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "3. What is the result of `2 + '2'`?",
    options: ["4", "'4'", "'22'", "NaN"],
    answer: "'22'"
  },
  {
    question: "4. Which company developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "5. What does `NaN` stand for?",
    options: ["Not a Number", "Negative and Null", "New as Number", "Name as Number"],
    answer: "Not a Number"
  },
  {
    question: "6. How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
    answer: "// comment"
  },
  {
    question: "7. What is the correct way to write a function in JavaScript?",
    options: ["function = myFunc()", "function:myFunc()", "function myFunc()", "func myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "8. How can you convert a string to a number?",
    options: ["parseInt()", "Number()", "Unary plus (+)", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "9. What is a closure in JavaScript?",
    options: [
      "An object inside a function",
      "A function having access to its parent scope",
      "A function without return",
      "None of the above"
    ],
    answer: "A function having access to its parent scope"
  },
  {
    question: "10. What is the default value of `let` variables?",
    options: ["0", "null", "undefined", "false"],
    answer: "undefined"
  },
  {
    question: "11. Which method is used to remove the last element of an array?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    answer: "pop()"
  },
  {
    question: "12. Which method adds an element to the beginning of an array?",
    options: ["push()", "unshift()", "prepend()", "concat()"],
    answer: "unshift()"
  },
  {
    question: "13. What will `Boolean('')` return?",
    options: ["true", "false", "null", "undefined"],
    answer: "false"
  },
  {
    question: "14. What is the purpose of `setTimeout()`?",
    options: [
      "Executes code repeatedly",
      "Executes code after a delay",
      "Stops code execution",
      "Calls a function instantly"
    ],
    answer: "Executes code after a delay"
  },
  {
    question: "15. What is the scope of variables declared with `var`?",
    options: ["Block", "Function", "Global", "Module"],
    answer: "Function"
  },
  {
    question: "16. What does `===` check in JavaScript?",
    options: ["Value only", "Type only", "Value and Type", "None"],
    answer: "Value and Type"
  },
  {
    question: "17. Which of the following is not a JavaScript data type?",
    options: ["Number", "String", "Float", "Boolean"],
    answer: "Float"
  },
  {
    question: "18. Which method returns the index of the first occurrence of a value in an array?",
    options: ["find()", "indexOf()", "includes()", "search()"],
    answer: "indexOf()"
  },
  {
    question: "19. What does `Array.isArray()` do?",
    options: [
      "Checks if a variable is an array",
      "Converts to array",
      "Creates a new array",
      "None of the above"
    ],
    answer: "Checks if a variable is an array"
  },
  {
    question: "20. What will `typeof []` return?",
    options: ["'array'", "'object'", "'list'", "'undefined'"],
    answer: "'object'"
  },
  {
    question: "21. What will `console.log('5' - 2)` output?",
    options: ["3", "'3'", "'52'", "NaN"],
    answer: "3"
  },
  {
    question: "22. Which method is used to join array elements into a string?",
    options: ["concat()", "toString()", "join()", "merge()"],
    answer: "join()"
  },
  {
    question: "23. How do you declare an arrow function?",
    options: ["function => ()", "() => {}", "=> function () {}", "(=>) {}"],
    answer: "() => {}"
  },
  {
    question: "24. Which of these is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  },
  {
    question: "25. What does `JSON.stringify()` do?",
    options: [
      "Parses JSON to string",
      "Converts a JavaScript object to JSON string",
      "Minifies code",
      "Stringifies variables"
    ],
    answer: "Converts a JavaScript object to JSON string"
  }
  
];

export default jsQuestions;