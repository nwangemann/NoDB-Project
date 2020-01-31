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
            alter_item: false,
            checked: false,
            alter_item_cost: ''
        }
    }

    sendOrder = (e) => {
        console.log('e.target.value', e.target.value)
        let index = e.target.value
        let menuItem = this.props.menu[index]
        this.setState({
            id: menuItem.id,
            item: menuItem.item,
            cost: menuItem.cost,
            alter_item: false,
            alter_item_cost: menuItem.alter_item_cost
        })
        console.log(menuItem)
    }

    handleCheck = (e) => {
        let check = e.target.checked
        let index = e.target.value
        let menuItem = this.props.menu[index]
        if(check){
            this.setState({
                checked: check,
                alter_item_cost: menuItem.alter_item_cost
            })
        } else if (!check){
            this.setState({
                checked: check,
                alter_item_cost: 0
            })
        }
    }
        
    

    render(){
        let menuMap = this.props.menu.map(elem => {
            return <div className="menuItemBox">
                        <h1 id={elem.id} className="menuItem">{elem.item}
                        </h1>
                        <p id={elem.id} className="menuContent price">${elem.cost}</p>            
                        <p id={elem.id} className="menuContent">
                        <input type="checkbox" value={elem.id} onChange={this.handleCheck} />{elem.alter_item}:   ${elem.alter_item_cost}</p>
                        <button value={elem.id} id={elem.id} onClick={this.sendOrder} >Add To Order!</button>
                 </div>
        })
        return(
            <div className="menuParentBox">
                {menuMap}


            </div>
        )
    }
}

export default Menu