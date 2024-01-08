import React from "react";

const FinishScreen = ({ points, maxPossiblePoints }) => {
  const percentage = Math.round(points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points} </strong>
      out of {maxPossiblePoints} ({percentage}%)
    </p>
  );
};

export default FinishScreen;
