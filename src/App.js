import HabitList from "./components/HabitList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddHabit from "./components/AddHabit";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/addHabit" element={<AddHabit />} />
        <Route path="/HabitList" element={<HabitList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
