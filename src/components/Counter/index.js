import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

class Counter extends Component {
  state = {quantity: 0}

  onDecrement = () => {
    const {quantity} = this.state
    if (quantity > 0) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  onAddToCart = () => {
    const {quantity} = this.state
    if (quantity > 0) {
      const {addItemId, restaurantId} = this.props
      console.log(addItemId)
      const itemInfo = addItemId
      const {history} = this.props
      Cookies.set('item_id', itemInfo, {expires: 30})
      Cookies.set('quantity', quantity, {expires: 30})
      Cookies.set('restaurantId', restaurantId, {expires: 30})
      history.push('/cart')
    }
  }

  render() {
    const {quantity} = this.state
    return (
      <div className="counter-block">
        <div className="counter-block-quantity">
          <button
            className="counter-button"
            type="button"
            onClick={this.onDecrement}
          >
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button
            className="counter-button"
            type="button"
            onClick={this.onIncrement}
          >
            +
          </button>
        </div>
        <button
          onClick={this.onAddToCart}
          type="button"
          className="add-cart-button "
        >
          Add to Cart
        </button>
      </div>
    )
  }
}

export default withRouter(Counter)
