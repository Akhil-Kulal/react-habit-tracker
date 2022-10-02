import Header from "./components/Header";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* component for heading */}
      <Header />

      {/* links to toggle between AddHabit and HabitList component */}
      <Link to="/addHabit" className="navigate">
        Add Habit
      </Link>
      <Link to="/" className="navigate">
        Habits
      </Link>

      {/* routes to toggle between AddHabit and HabitList component */}
      <Routes>
        <Route path="/addHabit" element={<AddHabit />} />
        <Route path="/" element={<HabitList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
