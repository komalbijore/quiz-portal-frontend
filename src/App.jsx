// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./components/Navbar";
import QuizLevel from "./components/QuizLevel";

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
          <Route path={`/quiz-level/:subject`} element={<QuizLevel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
