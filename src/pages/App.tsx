import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import CreateEventPage from "./CreateEventPage";
import EventPage from "./EventPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<CreateEventPage />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
}

export default App;
