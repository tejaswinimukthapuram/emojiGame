// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, reStartGame} = props
  const onPlayAgainClick = () => {
    reStartGame()
  }
  const image = isWon ? (
    <div className="win-or-lose-card-container">
      <div>
        <h1 className="win-or-lose-heading">You Won</h1>
        <p className="best-score">Best Score</p>
        <p className="win-or-lose-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onPlayAgainClick}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="win-image"
        alt="win or lose"
      />
    </div>
  ) : (
    <div className="win-or-lose-card-container">
      <div>
        <h1 className="win-or-lose-heading">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="win-or-lose-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onPlayAgainClick}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="lose-image"
        alt="win or lose"
      />
    </div>
  )
  return <div>{image}</div>
}

export default WinOrLoseCard
