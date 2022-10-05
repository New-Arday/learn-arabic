import "./App.css";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Lesson from "./components/Lesson";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [lessons, setLessons] = useState([]);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={<Home lessons={lessons} setLessons={setLessons} />}
        />

        <Route
          path="/lessons"
          element={<Lessons lessons={lessons} setLessons={setLessons} />}
        />
        <Route
          path="/lesson/:id/quiz"
          element={<Quiz element={<Header />} />}
        />
        <Route
          path="/lesson/:id"
          element={<Lesson lessons={lessons} setLessons={setLessons} />}
        />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
