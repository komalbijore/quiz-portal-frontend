import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  // const subjectsQuestionsAnswersArrays = [
  //   {
  //     html: [
  //       {
  //         easy: [
  //           {
  //             question: "What does HTML stand for?",
  //             options: [
  //               "Hyper Text Markup Language",
  //               "High Text Machine Language",
  //               "Hyper Tabular Markup Language",
  //               "None of these",
  //             ],
  //             answer: "Hyper Text Markup Language",
  //           },
  //           {
  //             question: "Which HTML tag is used to create a hyperlink?",
  //             options: ["<link>", "<a>", "<href>", "<hyperlink>"],
  //             answer: "<a>",
  //           },
  //           {
  //             question: "Which tag is used to display an image in HTML?",
  //             options: ["<img>", "<image>", "<picture>", "<src>"],
  //             answer: "<img>",
  //           },
  //           {
  //             question: "Which HTML element is used for the largest heading?",
  //             options: ["<h6>", "<heading>", "<h1>", "<head>"],
  //             answer: "<h1>",
  //           },
  //           {
  //             question:
  //               "Which attribute is used to provide an alternate text for an image?",
  //             options: ["title", "alt", "src", "href"],
  //             answer: "alt",
  //           },
  //           {
  //             question: "Which tag is used to create an unordered list?",
  //             options: ["<ol>", "<ul>", "<li>", "<list>"],
  //             answer: "<ul>",
  //           },
  //           {
  //             question: "Which HTML tag is used to define a table row?",
  //             options: ["<td>", "<th>", "<tr>", "<table>"],
  //             answer: "<tr>",
  //           },
  //           {
  //             question: "Which input type is used for password fields?",
  //             options: ["text", "password", "number", "email"],
  //             answer: "password",
  //           },
  //           {
  //             question: "Which HTML tag is used to create a line break?",
  //             options: ["<lb>", "<break>", "<br>", "<line>"],
  //             answer: "<br>",
  //           },
  //           {
  //             question: "Which HTML element contains the page title?",
  //             options: ["<meta>", "<title>", "<head>", "<header>"],
  //             answer: "<title>",
  //           },
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     css: [
  //       {
  //         question: "What does CSS stand for?",
  //         options: [
  //           "Creative Style Sheets",
  //           "Cascading Style Sheets",
  //           "Computer Style Sheets",
  //           "Colorful Style Sheets",
  //         ],
  //         answer: "Cascading Style Sheets",
  //       },
  //       {
  //         question: "Which property is used to change text color?",
  //         options: ["font-color", "text-color", "color", "background-color"],
  //         answer: "color",
  //       },
  //       {
  //         question: "Which CSS property controls the text size?",
  //         options: ["text-size", "font-style", "font-size", "text-style"],
  //         answer: "font-size",
  //       },
  //       {
  //         question: "Which property is used to change background color?",
  //         options: ["bgcolor", "background-color", "color", "background-style"],
  //         answer: "background-color",
  //       },
  //       {
  //         question: "Which CSS property controls spacing inside an element?",
  //         options: ["margin", "padding", "border", "spacing"],
  //         answer: "padding",
  //       },
  //       {
  //         question: "Which property is used to make text bold?",
  //         options: ["font-style", "font-weight", "text-bold", "weight"],
  //         answer: "font-weight",
  //       },
  //       {
  //         question: "Which CSS property is used to center text?",
  //         options: ["align", "text-align", "center", "font-align"],
  //         answer: "text-align",
  //       },
  //       {
  //         question: "Which display value makes elements appear in a row?",
  //         options: ["block", "inline", "flex", "none"],
  //         answer: "flex",
  //       },
  //       {
  //         question: "Which property is used to add space outside an element?",
  //         options: ["margin", "padding", "border-spacing", "space"],
  //         answer: "margin",
  //       },
  //       {
  //         question: "Which property controls element transparency?",
  //         options: ["visibility", "opacity", "display", "transparent"],
  //         answer: "opacity",
  //       },
  //     ],
  //   },

  //   {
  //     javascript: [
  //       {
  //         question: "Which company developed JavaScript?",
  //         options: ["Microsoft", "Netscape", "Google", "Oracle"],
  //         answer: "Netscape",
  //       },
  //       {
  //         question: "Which keyword is used to declare a variable?",
  //         options: ["var", "let", "const", "All of these"],
  //         answer: "All of these",
  //       },
  //       {
  //         question: "Which symbol is used for single line comments?",
  //         options: ["//", "/* */", "#", "<!-- -->"],
  //         answer: "//",
  //       },
  //       {
  //         question: "Which method converts JSON to object?",
  //         options: [
  //           "JSON.parse()",
  //           "JSON.stringify()",
  //           "JSON.convert()",
  //           "JSON.object()",
  //         ],
  //         answer: "JSON.parse()",
  //       },
  //       {
  //         question: "Which method adds an element to the end of an array?",
  //         options: ["push()", "pop()", "shift()", "unshift()"],
  //         answer: "push()",
  //       },
  //       {
  //         question: "Which operator is used for strict equality?",
  //         options: ["==", "===", "!=", "="],
  //         answer: "===",
  //       },
  //       {
  //         question: "Which method removes the last element of an array?",
  //         options: ["pop()", "shift()", "slice()", "remove()"],
  //         answer: "pop()",
  //       },
  //       {
  //         question: "Which function prints output in console?",
  //         options: [
  //           "console.log()",
  //           "print()",
  //           "log.console()",
  //           "console.print()",
  //         ],
  //         answer: "console.log()",
  //       },
  //       {
  //         question: "Which keyword is used to define a function?",
  //         options: ["function", "func", "define", "method"],
  //         answer: "function",
  //       },
  //       {
  //         question: "What will typeof null return?",
  //         options: ["null", "object", "undefined", "string"],
  //         answer: "object",
  //       },
  //     ],
  //   },
  // ];

  const subjectsQuestionsAnswersArrays = [
    {
      html: [
        {
          easy: [
            {
              question: "What does HTML stand for?",
              options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Tabular Markup Language",
                "None of these",
              ],
              answer: 0,
            },
            {
              question: "Which HTML tag is used to create a hyperlink?",
              options: ["<link>", "<a>", "<href>", "<hyperlink>"],
              answer: 1,
            },
            {
              question: "Which tag is used to display an image in HTML?",
              options: ["<img>", "<image>", "<picture>", "<src>"],
              answer: 0,
            },
            {
              question: "Which HTML element is used for the largest heading?",
              options: ["<h6>", "<heading>", "<h1>", "<head>"],
              answer: 2,
            },
            {
              question:
                "Which attribute is used to provide an alternate text for an image?",
              options: ["title", "alt", "src", "href"],
              answer: 1,
            },
            {
              question: "Which tag is used to create an unordered list?",
              options: ["<ol>", "<ul>", "<li>", "<list>"],
              answer: 1,
            },
            {
              question: "Which HTML tag is used to define a table row?",
              options: ["<td>", "<th>", "<tr>", "<table>"],
              answer: 2,
            },
            {
              question: "Which input type is used for password fields?",
              options: ["text", "password", "number", "email"],
              answer: 1,
            },
            {
              question: "Which HTML tag is used to create a line break?",
              options: ["<lb>", "<break>", "<br>", "<line>"],
              answer: 2,
            },
            {
              question: "Which HTML element contains the page title?",
              options: ["<meta>", "<title>", "<head>", "<header>"],
              answer: 1,
            },
          ],
        },
      ],
    },

    {
      css: [
        {
          question: "What does CSS stand for?",
          options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
          ],
          answer: 1,
        },
        {
          question: "Which property is used to change text color?",
          options: ["font-color", "text-color", "color", "background-color"],
          answer: 2,
        },
        {
          question: "Which CSS property controls the text size?",
          options: ["text-size", "font-style", "font-size", "text-style"],
          answer: 2,
        },
        {
          question: "Which property is used to change background color?",
          options: ["bgcolor", "background-color", "color", "background-style"],
          answer: 1,
        },
        {
          question: "Which CSS property controls spacing inside an element?",
          options: ["margin", "padding", "border", "spacing"],
          answer: 1,
        },
        {
          question: "Which property is used to make text bold?",
          options: ["font-style", "font-weight", "text-bold", "weight"],
          answer: 1,
        },
        {
          question: "Which CSS property is used to center text?",
          options: ["align", "text-align", "center", "font-align"],
          answer: 1,
        },
        {
          question: "Which display value makes elements appear in a row?",
          options: ["block", "inline", "flex", "none"],
          answer: 2,
        },
        {
          question: "Which property is used to add space outside an element?",
          options: ["margin", "padding", "border-spacing", "space"],
          answer: 0,
        },
        {
          question: "Which property controls element transparency?",
          options: ["visibility", "opacity", "display", "transparent"],
          answer: 1,
        },
      ],
    },

    {
      javascript: [
        {
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Netscape", "Google", "Oracle"],
          answer: 1,
        },
        {
          question: "Which keyword is used to declare a variable?",
          options: ["var", "let", "const", "All of these"],
          answer: 3,
        },
        {
          question: "Which symbol is used for single line comments?",
          options: ["//", "/* */", "#", "<!-- -->"],
          answer: 0,
        },
        {
          question: "Which method converts JSON to object?",
          options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()",
          ],
          answer: 0,
        },
        {
          question: "Which method adds an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: 0,
        },
        {
          question: "Which operator is used for strict equality?",
          options: ["==", "===", "!=", "="],
          answer: 1,
        },
        {
          question: "Which method removes the last element of an array?",
          options: ["pop()", "shift()", "slice()", "remove()"],
          answer: 0,
        },
        {
          question: "Which function prints output in console?",
          options: [
            "console.log()",
            "print()",
            "log.console()",
            "console.print()",
          ],
          answer: 0,
        },
        {
          question: "Which keyword is used to define a function?",
          options: ["function", "func", "define", "method"],
          answer: 0,
        },
        {
          question: "What will typeof null return?",
          options: ["null", "object", "undefined", "string"],
          answer: 1,
        },
      ],
    },
  ];

  const { subject, level } = useParams();
  console.log({ subject, level });

  const subjectAndLevelWiseQuestionAnswer = subjectsQuestionsAnswersArrays
    ?.find((item) => subject in item)
    ?.[subject]?.find((item) => level in item)?.[level];
  console.log({ subjectAndLevelWiseQuestionAnswer, subject });

  // const [index, setIndex] = useState(0);
  // const isLastQuestion =
  //   index === subjectAndLevelWiseQuestionAnswer?.length - 1;

  // const [currentQuestion, setCurrentQuestion] = useState(
  //   subjectAndLevelWiseQuestionAnswer?.[index],
  // );

  // const { answer, options, question } = currentQuestion;

  // const [lock, setLock] = useState(false);
  // const [score, setScore] = useState(0);
  // const [result, setResult] = useState(false);

  // console.log({ question, options, answer });

  // let opt1 = useRef(null);
  // let opt2 = useRef(null);
  // let opt3 = useRef(null);
  // let opt4 = useRef(null);

  // let allOption = [opt1, opt2, opt3, opt4];

  // let checkAns = (e, ans) => {
  //   if (lock === false) {
  //     if (ans == answer) {
  //       e.target.classList.add("correct");
  //       setLock(true);
  //       setScore((prev) => prev + 1);
  //     } else {
  //       e.target.classList.add("wrong");
  //     }
  //   }
  // };

  // return (
  //   <div className="w-[50%] flex m-auto border-2 border-amber-300 flex-col">
  //     <h1>
  //       {index + 1} Question of {subjectAndLevelWiseQuestionAnswer?.length}
  //     </h1>
  //     <h1>
  //       Question {index + 1} {question}
  //     </h1>
  //     <div>
  //       <ul>
  //         {options?.map((item, idx = 0) => {
  //           return (
  //             <li className="cursor-pointer p-2.5 border-1 border-gray-300 rounded-full mx-1 my-3">
  //               {item}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>

  //     <div className="flex justify-between m-3">
  //       <button
  //         onClick={() => {
  //           if (index > 0) {
  //             setIndex(index - 1);
  //           }
  //         }}
  //         className="h-[44px] border px-7 rounded-full bg-blue-700 text-white text-[16px] "
  //       >
  //         Previous
  //       </button>
  //       <button
  //         onClick={() => {
  //           if (index !== isLastQuestion) {
  //             setIndex(index + 1);
  //           }

  //           if (isLastQuestion) {
  //           }
  //         }}
  //         className="h-[44px] border px-7 rounded-full bg-blue-700 text-white text-[16px]"
  //       >
  //         {isLastQuestion ? "Submit" : "Next"}
  //       </button>
  //     </div>
  //   </div>
  // );

  let [index, setIndex] = useState(0);

  let [que, setQue] = useState(subjectAndLevelWiseQuestionAnswer[index]);

  let [lock, setLock] = useState(false);

  let [score, setScore] = useState(0);

  let [result, setResult] = useState(false);

  let { question, answer, options } = que;

  console.log({ question, answer, ...options });

  let o1 = useRef(null);
  let o2 = useRef(null);
  let o3 = useRef(null);
  let o4 = useRef(null);

  let allOpt = [o1, o2, o3, o4];

  let checkAns = (e, answer) => {
    if (lock === false) {
      e.target.classList.add("correct");
      setLock(true);
      setScore((p) => p + 1);
    } else {
      e.target.classList.add("wrong");
      setLock(true);
      allOpt[ans].current.classList.add("correct");
    }
  };

  let nextFn = () => {
    console.log({ kk: "hkkk", index });
    if (lock) {
      if (index === subjectAndLevelWiseQuestionAnswer?.length - 1) {
        setResult(true);
        return 0;
      }
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setQue(subjectAndLevelWiseQuestionAnswer[index]);
      setLock(false);
      allOpt?.map((v) => {
        v.current?.classList?.remove("correct");
        v.current?.classList?.remove("wrong");
        return null;
      });
    }
  };

  console.log({ options });

  return (
    <>
      {result ? (
        <h1>
          Your Score is {score} out of{" "}
          {subjectAndLevelWiseQuestionAnswer?.length}{" "}
        </h1>
      ) : (
        <>
          <h2>{index + 1} Question</h2>

          <ul style={{ color: "black", background: "white" }}>
            {options?.map((item, idx) => {
              return (
                <li
                  key={`${item}${idx}`}
                  // ref={`o${idx + 1}`}
                  onClick={(e) => checkAns(e, idx)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={(e) => nextFn()}>
            {" "}
            Next
          </button>
        </>
      )}
    </>
  );
};

export default Quiz;
