import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage";
import EventPage from "./components/Pages/EventPage/EventPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register/:id" element={<RegisterPage />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
