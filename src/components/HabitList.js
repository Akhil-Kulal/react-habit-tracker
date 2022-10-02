import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../store/habitSlice";

// component to display all the habits
const HabitList = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit);
  let color;

  return (
    <div className="habits-container">
      <div>
        {habits.map((habit) => {
          return (
            <div key={habit.id}>
              <h4>
                {habit.id}. {habit.title}
              </h4>
              <div className="week">
                {Object.entries(habit.status).map(([key, value]) => {
                  // defining color for different status of the habit
                  if (value === "none") {
                    color = "white";
                  }
                  if (value === "done") {
                    color = "green";
                  }
                  if (value === "not-done") {
                    color = "red";
                  }
                  return (
                    <div
                      className="day"
                      key={key}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => {
                        dispatch(changeStatus({ id: habit.id, key }));
                      }}
                    >
                      {key}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HabitList;
