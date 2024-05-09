import React, { useState } from "react";
import Toggle from "./Toggle";

const App = () => {
  const [grade, setGrade] = useState(75);
  const handleGradeChange = (event) => {
    setGrade(parseInt(event.target.value));
  };

  return (
    <div className="app">
      <center>
        <h1>Grade Checker</h1>
        <label htmlFor="gradeInput">Enter your grade: </label>
        <input
          id="gradeInput"
          type="number"
          value={grade}
          onChange={handleGradeChange}
          min="0"
          max="100"
        />
        <Toggle grade={grade} />
      </center>
    </div>
  );
};

export default App;
