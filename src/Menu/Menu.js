import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props)
        

        this.state = {
            id: 2,
            name: '',
            alt_checked: false,
            alter_item: '',
            alter_item_cost: '',
            total: ''
        }
    }

    sendOrder = (e) => {
        let index = e.target.value
        let menuItem = this.props.menu[index]
        let newTotal = parseInt(menuItem.cost) + parseInt(this.state.alter_item_cost)
       

        let newOrder = {
            id: null,
            name: this.state.name,
            item: menuItem.item,
            quantity: 1,
            cost: menuItem.cost,
            alt_checked: this.state.alt_checked,
            alter_item: menuItem.alter_item,
            alter_item_cost: this.state.alter_item_cost,
            total: newTotal
        }
       this.props.placeOrder(newOrder)
    }

    handleCheck = (e) => {
        let check = e.target.checked
        let index = e.target.value
        let menuItem = this.props.menu[index]
        if(check){
            this.setState({
                alt_checked: true,
                alter_item_cost: menuItem.alter_item_cost
            })
        } else if (!check){
            this.setState({
                alt_checked: false,
                alter_item_cost: 0
            })
        }
    }

    handleChange = (e) => {
        let {value} = e.target
        this.setState({
            name : value
        })
    }
        
    

    render(){
        const menuMap = this.props.menu.map(elem => {
            return <div 
                    className="menuItemBox">
                        <h1 
                        className="menuItem menuContent">{elem.item}
                        </h1>
                        <p 
                        className="menuContent price">${elem.cost}</p>            
                        <p 
                        className="menuContent">
                        <input 
                        type="checkbox" 
                        value={elem.id} 
                        onChange={this.handleCheck} />{elem.alter_item}:   ${elem.alter_item_cost}</p>
                        <div className="buttonFlexBox">
                        <button 
                        className="menuButton"
                        value={elem.id} 
                        onClick={this.sendOrder} >Add To Order!</button>
                        </div>
                 </div>
        })
        return(
            <div className="menuParentBox menuDisplay" >
                <div className="nameDisplayCatch">
                <div className="nameForOrder">
                <h3>Enter A Name For Your Order:</h3>
                </div>
                <input 
                className="nameInput"
                type="text"
                name="name"
                value={this.state.name} 
                placeholder="Enter Name For Order"
                onChange={this.handleChange} />
                </div>
                <div className="menuDisplayCatch">
                <h1 className="displayedText">Menu:</h1>
                <div className="menuDisplay">
                {menuMap}
                </div>
                </div>


            </div>
        )
    }
}

export default Menu