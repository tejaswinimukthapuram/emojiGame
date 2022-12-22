// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {score, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div>
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="emoji-game-name">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
