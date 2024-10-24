// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  return (
    <nav className="navbar-container fixed-top pt-5 pb-5">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo mr-1"
        />
        <h1 className="game-name mb-2">Emoji Game</h1>
      </div>
      {gameStatus === "IN_PROGRESS"? 
      <div className="score-container">
        <p className="mr-5">Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div> : ''}
    </nav>
  )
}

export default NavBar
