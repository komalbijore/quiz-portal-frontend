// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/authentication/Login";
import Signup from "./Pages/authentication/Signup";
import Navbar from "./components/Navbar";
import QuizLevel from "./components/QuizLevel";
import Quiz from "./components/Quiz";
// import Quiz from "./components/Quiz";
function App() {
  console.log("App");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path={`/:subject/quiz-level`} element={<QuizLevel />} />
          <Route path={`/:subject/quiz-level/:level`} element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
