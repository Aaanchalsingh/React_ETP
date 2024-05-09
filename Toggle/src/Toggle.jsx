import React from 'react';

const Toggle = ({ grade }) => {
  return (
    <div className="grade-toggle">
      <h2>Grade Information</h2>
      <div className="grade-content">
        <p>Your grade: {grade}</p>
        {grade >= 90 && <p>Your grade is excellent!</p>}
        {grade >= 80 && grade < 90 && <p>Your grade is very good!</p>}
        {grade >= 70 && grade < 80 && <p>Your grade is good!</p>}
        {grade >= 60 && grade < 70 && <p>Your grade is satisfactory.</p>}
        {grade < 60 && <p>Your grade is not satisfactory. You need improvement.</p>}
      </div>
    </div>
  );
}

export default Toggle;
