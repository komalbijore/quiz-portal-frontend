import { Button } from "@mui/material";
import React from "react";

import htmlImage from "../assets/images/htmlImage.png";

import cssImage from "../assets/images/cssImage.png";

import javascriptImage from "../assets/images/javascriptImage.jpg";
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
  { label: "HTML", image: htmlImage, value: "html" },
  { label: "CSS", image: cssImage, value: "css" },
  { label: "Javascript", image: javascriptImage, value: "js" },
];

console.log("home");

const Home = () => {
  const navigate = useNavigate();
  console.log("kkkkhhh");
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {subjects?.map((subject) => {
        console.log({ subject });
        return (
          <div key={subject?.value} className="text-center bg-gray-300">
            <img
              src={subject?.image}
              alt={subject?.label}
              className="w-full h-[300px]"
            />
            <p>{subject?.label}</p>
            {/* <Button
            // variant="outlined"
            // onClick={() => {
            //   // navigate(`/quiz-level/${subject?.value}`);
            // }}
            >
              Click here{" "}
            </Button> */}
            <Button
              onClick={() => {
                navigate(`quiz-level/${subject?.value}`);
              }}
            >
              Click Here
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
