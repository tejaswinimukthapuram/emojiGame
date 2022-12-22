// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onEmojiClick = () => {
    emojiClick(id)
  }
  return (
    <li className="emoji-card-container">
      <button type="button" onClick={onEmojiClick}>
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
