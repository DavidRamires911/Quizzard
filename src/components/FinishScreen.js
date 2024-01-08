import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  let emoji;
if(percentage === 100) emoji = "🥳";
if(percentage >= 80) emoji = "🤩";
if(percentage >= 60) emoji = "😀";
if(percentage >= 40) emoji = "😐";
if(percentage >= 20) emoji = "😕";
if(percentage < 20) emoji = "😢";

  return (
    <>
    <p className="result">
    <span>{emoji} </span>
      You scored <strong>{points} </strong>
      out of {maxPossiblePoints} ({percentage}%)
    </p>
    <p className="highscore"> (Highscore: {highscore} points) </p>
    <button onClick={()=> dispatch({type:"reset"}) } className="btn btn-ui" > Restart </button>
    </>
  );
};

export default FinishScreen;
