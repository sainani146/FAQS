// Write your code here.
import './index.css'

const Faq = props => {
  const {item, Active, onItem} = props
  const {bool} = Active
  const {questionText, answerText, id} = item

  const onAnswer = () => {
    // console.log(id, bool)
    onItem(id)
  }
  const ans = (
    <div>
      <hr />
      <p className="answer">{answerText}</p>
    </div>
  )

  const icon = bool
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const text = bool ? 'minus' : 'plus'

  return (
    <li>
      <div className="faq-section">
        <div className="question-section">
          <h1 className="question">{questionText}</h1>
          <button className="btn" type="button" onClick={onAnswer}>
            <img src={icon} alt={text} />
          </button>
        </div>
        {bool && ans}
      </div>
    </li>
  )
}
export default Faq
