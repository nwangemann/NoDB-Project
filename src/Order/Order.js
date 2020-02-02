import React, {Component} from 'react';
import './Order.css'

class Order extends Component {
    constructor(props){
        super(props)

        this.state = {
            quantity: 1,
            
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
        console.log(foundIndex, "foundindex")
        let foundItem = this.props.orders[foundIndex]
        console.log('foundItem', foundItem)
        let updatedOrder = {
            id: foundItem.id,
            name: foundItem.name,
            item: foundItem.item,
            quantity: this.state.quantity,
            cost: foundItem.cost,
            alt_checked: foundItem.alt_checked,
            alter_item: foundItem.alter_item,
            alter_item_cost: foundItem.alter_item_cost,
            total: foundItem.total
     }
        this.props.editOrder(foundIndex, updatedOrder)
        this.setState({
           quantity: 1
        })
    }

    deleteHandler = (e) => {
        let foundName = e.target.name
        let foundIndex = this.props.orders.findIndex(elem => {
            return elem.name === foundName
        })
        this.props.deleteOrder(foundIndex)
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
                    <li className="orderText" >Qty: {elem.quantity}</li>
                    </ul>
                    </div>
                    <div className="flexElem">
                    <h2>Total: ${elem.total}</h2>
                    </div>
                    <div className="flexElem">
                    <input
                type="number"
                name="quantity"
                placeholder="Edit Quantity"
                className="editField"
                onChange={this.handleChange}
                />
                <button 
                className="orderButton" 
                value={elem.id} 
                name={elem.name} 
                onClick={this.handleClick} >Edit Quantity</button>
                    </div>
                    <div className="flexElem">
                    <section><button 
                    value={elem.id}
                    name={elem.name}
                    onClick={this.deleteHandler}
                    className="orderButton"
                     >Delete Order</button></section>
                    </div>

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