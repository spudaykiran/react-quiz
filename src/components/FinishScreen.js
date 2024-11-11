function FinishScreen({ points, maxPoints, highscore, dispatch, dispatchEnd }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage < 100 && percentage >= 80) emoji = "🎉";
  if (percentage < 80 && percentage >= 50) emoji = "😊";
  if (percentage < 50 && percentage > 0) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
      <button
        className="btn btn-ui"
        onClick={() => dispatchEnd({ type: "endTest" })}
      >
        End Test
      </button>
    </>
  );
}

export default FinishScreen;
