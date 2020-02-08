import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      editView: false
    };
  }

  handleChange = e => {
    this.setState({
      editView: true
    });
  };

  handleQuantity = e => {
    console.log(e.target.value)
    this.setState({
      quantity: e.target.value
    });
  };



  handleClick = e => {
    console.log('this.state.quantity', this.state.quantity)
    let index = parseInt(e.target.value);
    
    let foundIndex = this.props.orders.findIndex(elem => {
      return parseInt(elem.id) === parseInt(index);
    });
    let foundItem = this.props.orders[foundIndex];
    let updatedOrder = {
      id: parseInt(foundItem.id),
      name: foundItem.name,
      item: foundItem.item,
      quantity: parseInt(this.state.quantity),
      cost: parseInt(foundItem.cost),
      alt_checked: foundItem.alt_checked,
      alter_item: foundItem.alter_item,
      alter_item_cost: parseInt(foundItem.alter_item_cost),
      total: parseInt(foundItem.total)
    };
    this.props.editOrder(foundIndex, updatedOrder);
    this.setState({
      quantity: 1,
      editView: false
    });
  };

  deleteHandler = e => {
    let id = parseInt(e.target.value);
    let foundIndex = this.props.orders.findIndex(elem => {
      return parseInt(elem.id) === parseInt(id);
    });
    this.props.deleteOrder(foundIndex);
  };

  render() {
    let mapped = this.props.orders.map(elem => {
      return (
        <div key={elem.id} className="orderBox flexElemBox">
          <div className="flexElem">
            <p className="orderName">Order for: {elem.name}</p>
          </div>
          <div className="flexElem">
            <ul>
              {elem.alt_checked ? (
                <div>
                  <li className="orderText">{elem.item}</li>
                  <li className="orderText">{elem.alter_item}</li>
                </div>
              ) : (
                <li className="orderText">{elem.item}</li>
              )}
              <li className="orderText">Qty: {elem.quantity}</li>
            </ul>
          </div>
          <div className="flexElem">
            <h2>Total: ${elem.total}</h2>
          </div>
          <div className="flexElem">
            {this.state.editView ? (
              <div>
                <input
                  type="number"
                  name="quantity"
                  className="editField"
                  onChange={this.handleQuantity}
                />
                <button
                  className="saveButton orderButton"
                  value={elem.id}
                  name={elem.name}
                  onClick={this.handleClick}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="orderButton"
                  value={elem.id}
                  name={elem.name}
                  onClick={this.handleChange}
                >
                  Edit Order
                </button>
              </div>
            )}
          </div>
          <div className="flexElem">
            <button
              value={elem.id}
              name={elem.name}
              onClick={this.deleteHandler}
              className="orderButton"
            >
              Delete Order
            </button>
          </div>
        </div>
      );
    });
    return <div className="orderParent">{mapped}</div>;
  }
}

export default Order;
