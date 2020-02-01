import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Menu from './Menu/Menu'
import Order from './Order/Order'

class App extends Component {
  constructor(){
    super()

    this.state = {
        orders: [],
        menu: []
    }
  }

  componentDidMount(){
    this.getMenu()
    this.getOrders()
  }

  getMenu = () => {
    axios.get(`/api/menu`).then(res => {
      this.setState({
        menu: res.data
      })
    }).catch(err => { 
      console.log(err) 
    })
  }

  getOrders = () => {
    axios.get(`/api/orders`).then(res => {
      this.setState({
        orders: res.data
      })
    }).catch(err => { 
      console.log(err) 
    })
  }

  placeOrder = (newOrder) => {
    axios.post('/api/create', newOrder).then(res => {
      this.setState({
        orders: res.data
      })
      this.getOrders()
    }).catch(err => { 
      console.log(err) 
    })
  }

  deleteOrder = (id) => {
    axios.delete(`/api/delete/${id}`).then(res => {
      this.setState({
        orders: res.data
      })
    }).catch(err => { 
      console.log(err) 
    })
  }

  updateOrder = (id, updatedOrder) => {
    axios.put(`/api/edit/${id}`, updatedOrder).then(res => {
      this.setState({
        orders: res.data
      })
    }).catch(err => { 
      console.log(err) 
    })
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-main"> 
          <h1>Server Side Bar & Grill</h1>

        </div>
        <div className="mainPageFlex">
          <div className="menuHousing">
          <Menu 
          menu={this.state.menu} 
          placeOrder={this.placeOrder} />
          </div>
          <div className="orderHousing">
            <Order 
            deleteOrder={this.deleteOrder}
            updateOrder={this.updateOrder}
            orders={this.state.orders} />
          </div>
        </div>
      </header>
    </div>
  )
  }
}

export default App;
