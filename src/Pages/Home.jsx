import { Button } from "@mui/material";
import React from "react";

import htmlImage from "../assets/images/HTML.jpg";

import cssImage from "../assets/images/css.png";

import javascriptImage from "../assets/images/js.png";
import reactjsImage from "../assets/images/react.png";
import sqlImage from "../assets/images/sql.png";
import javaImage from "../assets/images/java.jpg";
import advanceJavaImage from "../assets/images/advancedJava.jpg";
import javaFrameworkImage from "../assets/images/frameworks.png";

import { useNavigate } from "react-router-dom";

// const subjectsArrays = [
//   {
//     html: [
//       {
//         question: "What does HTML stand for?",
//         options: [
//           "Hyper Text Markup Language",
//           "High Text Machine Language",
//           "Hyper Tabular Markup Language",
//           "None of these",
//         ],
//         answer: "Hyper Text Markup Language",
//       },
//       {
//         question: "Which HTML tag is used to create a hyperlink?",
//         options: ["<link>", "<a>", "<href>", "<hyperlink>"],
//         answer: "<a>",
//       },
//       {
//         question: "Which tag is used to display an image in HTML?",
//         options: ["<img>", "<image>", "<picture>", "<src>"],
//         answer: "<img>",
//       },
//       {
//         question: "Which HTML element is used for the largest heading?",
//         options: ["<h6>", "<heading>", "<h1>", "<head>"],
//         answer: "<h1>",
//       },
//       {
//         question:
//           "Which attribute is used to provide an alternate text for an image?",
//         options: ["title", "alt", "src", "href"],
//         answer: "alt",
//       },
//       {
//         question: "Which tag is used to create an unordered list?",
//         options: ["<ol>", "<ul>", "<li>", "<list>"],
//         answer: "<ul>",
//       },
//       {
//         question: "Which HTML tag is used to define a table row?",
//         options: ["<td>", "<th>", "<tr>", "<table>"],
//         answer: "<tr>",
//       },
//       {
//         question: "Which input type is used for password fields?",
//         options: ["text", "password", "number", "email"],
//         answer: "password",
//       },
//       {
//         question: "Which HTML tag is used to create a line break?",
//         options: ["<lb>", "<break>", "<br>", "<line>"],
//         answer: "<br>",
//       },
//       {
//         question: "Which HTML element contains the page title?",
//         options: ["<meta>", "<title>", "<head>", "<header>"],
//         answer: "<title>",
//       },
//     ],

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

export const subjects = [
  {
    label: "HTML",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the Hypertext Markup Language.",
    image: htmlImage,
    value: "html",
  },
  {
    label: "CSS",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the Cascading Style Sheets (CSS)",
    image: cssImage,
    value: "css",
  },
  {
    label: "Javascript",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the JavaScript programming language",
    image: javascriptImage,
    value: "js",
  },
   {
    label: "React JS",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the React JS",
    image: reactjsImage,
    value: "reactjs",
  },
     {
    label: "SQL",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the Structured Query Language",
    image: sqlImage,
    value: "sql",
  },
     {
    label: "Java",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the Java programming language.",
    image: javaImage,
    value: "java",
  },
  {
    label: "Advanced Java",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the Advanced Java which include JDBC, Servlet ad JSP.",
    image: advanceJavaImage,
    value: "advance-java",
  },
  {
    label: "Java FrameWork",
    descriptions:
      "This quiz is designed to test your knowledge and understanding of the java framework that is Spring and Hibernate.",
    image: javaFrameworkImage,
    value: "java",
  },
];

console.log("home");

const Home = () => {
  const navigate = useNavigate();
  console.log("kkkkhhh");
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 p-5 flex flex-col gap-3">
      {subjects?.map((subject) => {
        console.log({ subject });
        return (
          <div
            key={subject?.value}
            className="bg-[aliceblue] flex flex-col h-full rounded-2xl shadow-md"
          >
            <h1 className="font-bold text-2xl p-2 text-center">
              {subject?.label}
            </h1>

            <img
              src={subject?.image}
              alt={subject?.label}
              className="w-full h-[200px]"
            />

            <div className="flex flex-col justify-between flex-1 m-3.5 gap-4">
              <p className="text-justify min-h[100px]">{subject?.descriptions}</p>

              <Button
                onClick={() => {
                  navigate(`/${subject?.value}/quiz-level`);
                }}
                className="!bg-blue-950 h-[48px] !text-white !mt-auto !rounded-full"
                fullWidth
              >
                Click Here
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
