import { Select } from "@mui/material";
import React from "react";
import { subjects } from "../Pages/Home";
import { Brain, CircleCheck, Play, Signal, Zap } from "lucide-react";
import laptopImage from "../assets/images/laptopImage.png";

const QuizLevel = () => {
  const quizLevelOptions = [
    {
      label: "Easy",
      value: "easy",
      icon: <Zap />,
      numberOfQuestions: 10,
      extraStyle: "border-green-400 text-green-500",
      ConceptCover: ["Basic Concepts", "Fundamentals", "Quik Warm-up"],
    },
    {
      label: "Medium",
      value: "medium",
      icon: <Signal />,
      numberOfQuestions: 15,
      extraStyle: "border-yellow-400 text-yellow-500",
      ConceptCover: [
        "Core Concepts",
        "Problem Solving",
        "Real World Scenarios",
      ],
    },

    {
      label: "Hard",
      value: "hard",
      icon: <Brain />,
      numberOfQuestions: 20,
      extraStyle: "border-red-400 !text-red-500",
      ConceptCover: ["Advanced Topics", "Challenging Logic", "Expert Level"],
    },
  ];

  const subjectName = window.location.pathname?.replace("/quiz-level/", "");
  const subject = subjects?.find((sub) => sub?.value === subjectName);

  // const subjectImage=subject?.

  console.log({ subjectName, window, subject });
  return (
    <>
      <div className="w-[60%] p-8 mt-24 border-2 border-gray-200 rounded-2xl  shadow-2xl m-auto ">
        <div className="flex gap-8 items-center w-full">
          <img src={subject?.image} className="w-[120px] h-[120px]" />
          <div className="w-[45%]">
            <h2 className="text-[25px] text-gray-700">Choose Quiz level for</h2>
            <h1 className="font-bold text-[35px]">
              <span className="text-blue-700">{subject?.label} </span> {"  "}
              Quiz
            </h1>
            <p className="text-[20px] text-[25px] text-gray-600">
              Select Difficulty Level
            </p>
          </div>
          <div className="flex justify-end w-[55%] ">
            <img
              src={laptopImage}
              className="w-[250px] h-[150px] justify-end"
              alt="laptop image"
            />
          </div>
        </div>

        <div className="w-full">
          {/* <p className="text-[20px] pl-[138px]">Select Difficulty Level</p> */}
          <div className="grid grid-cols-3 gap-8 mt-5">
            {quizLevelOptions?.map((item) => {
              return (
                // <div
                //   key={item?.value}
                //   className={`hover:animate-ppup border bg-white rounded-2xl p-4 flex flex-col gap-2 items-center shadow-2xl hover:shadow-3xl transition-all duration-1000 ${item?.extraStyle}`}
                // >
                <div
                  className={`bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-2 items-center
  shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:translate-x-1 
  transition-all hover:bg-blue-200 duration-300 ease-out cursor-pointer ${item?.extraStyle}`}
                >
                  <span className="p-3 rounded-full bg-gray-100">
                    {item?.icon}
                  </span>
                  <h1 className="flex gap-2 font-bold"> {item?.label}</h1>
                  <div
                    className={`rounded-full px-4 py-1 ${item?.value === "easy" ? "bg-green-100 text-green-900" : item?.value === "medium" ? "bg-yellow-100  text-amber-600" : "bg-red-100 text-red-700"}`}
                  >
                    {item?.numberOfQuestions} Questions
                  </div>

                  {/* topic cover */}
                  {item?.ConceptCover?.map((concept, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className="flex flex-row gap-1 justify-start pl-12 w-full text-center"
                        >
                          <CircleCheck className="size-4 mt-1.5" />{" "}
                          <span className="text-gray-700">{concept}</span>
                        </div>
                      </>
                    );
                  })}

                  <button className=" focus:outline:none cursor-pointer border flex gap-2 w-[90%]  text-[14px] py-2 justify-center rounded-full text-white bg-blue-700">
                    <span className="mt-[2px]">
                      <Play className="size-4" />
                    </span>
                    Start Quiz
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizLevel;
