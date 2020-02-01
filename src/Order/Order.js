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
            alter_item_cost: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleClick = (e) => {
        let id = e.target.value
        console.log(id)
        let { quantity } = this.state
        this.props.updateOrder(id,
            {
            quantity
         })
        this.setState({
           quantity: ''
        })
    }

    render(){
        let mapped = this.props.orders.map(elem => {
            let total = parseInt(elem.cost) + parseInt(elem.alter_item_cost)
            return <div className="orderBox">
                <p>Order for: {elem.name}</p>
                <ul>
                <li>{elem.item} qty:{elem.quantity}</li>
                    <li>{elem.cost}</li>
                </ul>
                <h2>Total: {total}</h2>
                <section><button onClick={this.editToggle} >Delete Order</button></section>
                {/* <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                placeholder="quantity"
                onChange={this.handleChange}
                />
                <button value={elem.id} name={elem.name} id={elem.name} onClick={this.handleClick}>Edit Quantity</button> */}

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