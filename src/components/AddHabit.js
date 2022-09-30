import React, { Component } from "react";

class AddHabit extends Component {
  render() {
    return (
      <div className="form-container">
        <h2>Add New Habit</h2>
        <form className="form">
          <input
            type="text"
            id="habitName"
            placeholder="Enter new habit"
            required
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddHabit;
