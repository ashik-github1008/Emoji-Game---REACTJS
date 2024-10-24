// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, handleEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickBtnEmoji = () => {
    handleEmojiClick(id)
  }

  return (
    <li className="emojiCard mr-3 mb-3">
      <button className="emoji-btn" onClick={onClickBtnEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
