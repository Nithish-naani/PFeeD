// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedBackSelected: true})
  }

  renderFeedBackQuestions = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <div className="mini-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="ul-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="mini-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
        <h1 className="thank-heading">Thank You!</h1>
        <p className="text">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state

    return (
      <div className="main-container">
        <div className="mini-container">
          {isFeedBackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedBackQuestions()}
        </div>
      </div>
    )
  }
}
export default Feedback
