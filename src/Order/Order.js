import React, {Component} from 'react';
import './Order.css'

class Order extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            name: '',
            item: '',
            quantity: 1,
            cost: '',
            alt_checked: false, 
            alter_item: '',
            alter_item_cost: 0,
            total: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleClick = (e) => {
        let index = e.target.value
        let foundIndex = this.props.orders.findIndex(elem => {
            return parseInt(elem.id) === parseInt(index)
        })
        console.log(foundIndex)
        let foundItem = this.props.orders[foundIndex]
        console.log('foundy', foundItem)
        let updatedOrder = {
            id: foundItem.id,
            name: foundItem.name,
            item: foundItem.item,
            quantity: this.state.quantity,
            cost: foundItem.cost,
            alt_checked: foundItem.checked,
            alter_item: foundItem.alter_item,
            alter_item_cost: foundItem.alter_item_cost,
            total: foundItem.total
     }
        this.props.updateOrder(foundItem, updatedOrder)
        this.setState({
           quantity: 1
        })
    }

    deleteHandler = (e) => {
        let index = e.target.value
        console.log('index', index)
        let foundItem = this.props.orders.findIndex(elem => {
            return parseInt(elem.id) === parseInt(index)
        })
        console.log('found', foundItem, 'index', index)
        this.props.deleteOrder(foundItem)
    }

    render(){
        let mapped = this.props.orders.map(elem => {
            return <div key={elem.id}
            className="orderBox flexElemBox">
                    <div className="flexElem">
                    <p className="orderName" >Order for: {elem.name}</p>
                    </div>
                    <div className="flexElem">
                    <ul>
                    <li className="orderText" >{elem.item}</li>
                    <li className="orderText" >Qty: {this.state.quantity}</li>
                    </ul>
                    </div>
                    <div className="flexElem">
                    <h2>Total: {elem.total}</h2>
                    </div>
                    <div className="flexElem">
                    <section><button 
                    value={elem.id}
                    onClick={this.deleteHandler}
                    className="orderButton"
                     >Delete Order</button></section>
                    </div>
                <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                placeholder="Edit Quantity"
                className="editField"
                onChange={this.handleChange}
                /><button 
                className="orderButton" 
                value={elem.id} 
                name={elem.name} 
                onClick={this.handleClick} >Edit Quantity</button>

            </div>
        })
        return(
            <div className="orderParent">
                {mapped}
            </div>
        )
    }
}

export default Order