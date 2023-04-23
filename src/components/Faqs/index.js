// Write your code here.
import {Component} from 'react'
import './index.css'
import Faq from '../FaqItem'

export default class Faqs extends Component {
  state = {
    isActive: [
      {id: 0, bool: false},
      {id: 1, bool: false},
      {id: 2, bool: false},
      {id: 3, bool: false},
    ],
  }

  onItem = id => {
    // console.log(id)

    this.setState(prevState => ({
      isActive: prevState.isActive.map(each => {
        if (id === each.id) {
          //  each.isFavorite = !each.isFavorite
          // console.log(each.id)
          return {...each, bool: !each.bool}
        }
        // console.log(each.id)
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isActive} = this.state

    return (
      <div className="container">
        <div className="main-container">
          <h1 className="main-heading">FAQS</h1>
          <ul>
            {faqsList.map(each => (
              <Faq
                key={each.id}
                item={each}
                Active={isActive[each.id]}
                onItem={this.onItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
