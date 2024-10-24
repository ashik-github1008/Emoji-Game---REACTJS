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
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    gameStatus: 'IN_PROGRESS',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    const {clickedEmojis, score, topScore} = this.state

    if (clickedEmojis.includes(id)) {
      this.setState({gameStatus: 'LOST'})
    } else {
      const newClickedEmojis = [...clickedEmojis, id]
      if (newClickedEmojis.length === this.props.emojisList.length) {
        this.setState({
          score: score + 1,
          topScore: Math.max(score + 1, topScore),
          gameStatus: 'WON',
        })
      } else {
        this.setState({
          score: score + 1,
          clickedEmojis: newClickedEmojis,
          topScore: Math.max(score + 1, topScore),
        })
      }
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameStatus: 'IN_PROGRESS',
    })
  }

  renderGameStatus = () => {
    const {gameStatus, score, topScore} = this.state

    if (gameStatus === 'WON') {
      return (
        <div className="game-status-container">
          <div>
            <h1 className="game-status-heading">You Won</h1>
            <p className="game-status-score-text">Best Score</p>
            <p className="game-status-score">{topScore}/12</p>
            <button
              className="play-again-btn"
              type="button"
              onClick={this.playAgain}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      )
    }

    if (gameStatus === 'LOST') {
      return (
        <div className="game-status-container">
          <div>
            <h1 className="game-status-heading">You Lose</h1>
            <p className="game-status-score-text">Score</p>
            <p className="game-status-score">{topScore}/12</p>
            <button
              className="play-again-btn"
              type="button"
              onClick={this.playAgain}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )
    }

    return null
  }

  render() {
    // const {emojisList} = this.props
    const {score, topScore, gameStatus} = this.state
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        <div className="bottom-container">
          {gameStatus === 'IN_PROGRESS' ? (
            <ul className="emoji-cards-container">
              {shuffledEmojis.map(eachEmojiList => (
                <EmojiCard
                  key={eachEmojiList.id}
                  emojiDetails={eachEmojiList}
                  handleEmojiClick={this.handleEmojiClick}
                />
              ))}
            </ul>
          ) : (
            this.renderGameStatus()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
