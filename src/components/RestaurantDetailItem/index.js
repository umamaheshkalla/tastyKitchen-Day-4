import {Component} from 'react'

import {Link} from 'react-router-dom'

import {IoMdStar} from 'react-icons/io'

import Counter from '../Counter'

import './index.css'

class RestaurantDetailItem extends Component {
  state = {onAddItem: true}

  addItem = () => {
    this.setState({onAddItem: false})
  }

  renderAddButton = () => (
    <button onClick={this.addItem} className="item-add-button" type="button">
      ADD
    </button>
  )

  render() {
    const {restaurantDetailItem, restaurantId} = this.props
    const {imageUrl, cost, foodType, id, name, rating} = restaurantDetailItem
    const {onAddItem} = this.state

    return (
      <Link to={id}>
        <div className="restaurantItems-block">
          <img className="item-image" alt={id} src={imageUrl} />
          <ul className="item-info">
            <li className="item-name">
              {name} <span className="food-type"> ({foodType})</span>
            </li>
            <li className="item-cost">Rs.{cost}.00</li>
            <li className="item-rating">
              <IoMdStar className="item-rating-icon" />
              {rating}
            </li>
            {onAddItem ? (
              this.renderAddButton()
            ) : (
              <Counter addItemId={id} restaurantId={restaurantId} />
            )}
          </ul>
        </div>
      </Link>
    )
  }
}

export default RestaurantDetailItem
