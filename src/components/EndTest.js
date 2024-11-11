function EndTest({ highscore }) {
  return (
    <div>
      <h2 align-text="center">Test ended</h2>
      <p className="highscore">You scored {highscore} points</p>
      <p className="result">
        Thanks for Taking Quiz! <span>🙏</span>
      </p>
    </div>
  );
}

export default EndTest;
