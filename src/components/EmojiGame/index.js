/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isGameEnd: false, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  reStartGame = () => {
    this.setState({clickedEmojisList: [], isGameEnd: false})
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  endGameAndSetTopScore = newScore => {
    const {topScore} = this.state

    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  emojiClick = emojiId => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const clickedEmojiDetails = emojisList.find(each => each.id === emojiId)
    if (clickedEmojisList.includes(clickedEmojiDetails)) {
      this.endGameAndSetTopScore(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.endGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [
          ...prevState.clickedEmojisList,
          clickedEmojiDetails,
        ],
      }))
    }
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        reStartGame={this.reStartGame}
        endGame={this.endGame}
      />
    )
  }

  render() {
    const emojisList = this.shuffledEmojisList()
    const {clickedEmojisList, isGameEnd, topScore} = this.state

    const {length} = clickedEmojisList
    let score = 0
    return (
      <div className="app-container">
        <NavBar score={length} topScore={topScore} isGameEnd={isGameEnd} />
        <ul className="emoji-main-container">
          <div className="emojis-container">
            {isGameEnd
              ? this.renderWinOrLose()
              : emojisList.map(each => (
                  <EmojiCard
                    emojiDetails={each}
                    emojiClick={this.emojiClick}
                    key={each.id}
                  />
                ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default EmojiGame
