import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHabit } from "../store/habitSlice";
import { getDays } from "../store/habitSlice";

// component used to add new habit in habit state
const AddHabit = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit);
  const [newHabit, setNewHabit] = useState("");
  const navigate = useNavigate();
  const addHabitHandler = (e) => {
    e.preventDefault();
    // dispatching new habit
    dispatch(
      addHabit({
        id: habits.length + 1,
        title: newHabit,
        status: getDays().reduce((a, v) => ({ ...a, [v]: "none" }), {}),
      })
    );
    setNewHabit("");
    navigate("/");
  };

  return (
    <>
      <div className="form-container">
        <h2>Add New Habit</h2>
        <form onSubmit={addHabitHandler} className="form">
          <input
            type="text"
            id="habitName"
            placeholder="Enter new habit"
            required
            value={newHabit}
            onChange={(e) => {
              setNewHabit(e.target.value);
            }}
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default AddHabit;
