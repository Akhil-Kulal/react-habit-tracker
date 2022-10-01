import { createSlice } from "@reduxjs/toolkit";

export const getDays = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const p = new Date();
    let q = new Date(p.setDate(p.getDate() - i));
    let r = q.toLocaleString("default", { day: "numeric", month: "short" });
    days.push(r);
  }
  return days;
};

const initialState = [
  {
    id: 1,
    title: "READ - read five pages",
    status: getDays().reduce((a, v) => ({ ...a, [v]: "none" }), {}),
  },
  {
    id: 2,
    title: "GYM - workout at gym for one hour",
    status: getDays().reduce((a, v) => ({ ...a, [v]: "none" }), {}),
  },
];

export const habitSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.forEach((s) => {
        if (s.id === action.payload.id) {
          if (s.status[action.payload.key] === "done") {
            s.status[action.payload.key] = "not-done";
            return;
          }
          if (s.status[action.payload.key] === "not-done") {
            s.status[action.payload.key] = "none";
            return;
          }
          if (s.status[action.payload.key] === "none") {
            s.status[action.payload.key] = "done";
            return;
          }
        }
      });
    },

    addHabit: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { changeStatus, addHabit } = habitSlice.actions;

export default habitSlice.reducer;
