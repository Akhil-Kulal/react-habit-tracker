import HabitList from "./components/HabitList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddHabit from "./components/AddHabit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Link to="/addHabit" className="navigate">
        Add Habit
      </Link>
      <Link to="/" className="navigate">
        Habits
      </Link>

      <Routes>
        <Route path="/addHabit" element={<AddHabit />} />
        <Route path="/" element={<HabitList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
