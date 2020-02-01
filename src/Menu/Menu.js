import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props)
        

        this.state = {
            id: '',
            name: '',
            item: '',
            quantity: '',
            cost: '',
            alt_checked: false,
            alter_item: '',
            alter_item_cost: ''
        }
    }

    sendOrder = (e) => {
        let index = e.target.value
        let menuItem = this.props.menu[index]
        let newOrder = {
            name: this.state.name,
            id: menuItem.id,
            item: menuItem.item,
            cost: menuItem.cost,
            alt_checked: this.state.alt_checked,
            alter_item: this.state.alter_item,
            alter_item_cost: this.state.alter_item_cost
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
        let menuMap = this.props.menu.map(elem => {
            return <div className="menuItemBox">
                        <h1 
                        id={elem.id} 
                        key={elem.id} 
                        className="menuItem">{elem.item}
                        </h1>
                        <p 
                        id={elem.id} 
                        key={elem.id} 
                        className="menuContent price">${elem.cost}</p>            
                        <p 
                        id={elem.id} 
                        className="menuContent"
                        key={elem.id}>
                        <input 
                        type="checkbox" 
                        value={elem.id} 
                        key={elem.id}
                        onChange={this.handleCheck} />{elem.alter_item}:   ${elem.alter_item_cost}</p>
                        <button 
                        value={elem.id} 
                        id={elem.id} 
                        key={elem.id}
                        onClick={this.sendOrder} >Add To Order!</button>
                 </div>
        })
        return(
            <div className="menuParentBox">
                <input 
                type="text"
                name="name"
                value={this.state.name} 
                placeholder="Enter Name For Order"
                onChange={this.handleChange} />
                <h1>Menu:</h1>
                {menuMap}


            </div>
        )
    }
}

export default Menu