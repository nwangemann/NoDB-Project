import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Menu from './Menu/Menu'

class App extends Component {
  constructor(){
    super()

    this.state = {
        menu: [],
        id: '',
        name: '',
        item: '',
        quantity: '',
        cost: '',
        alter_item: false,
        alter_item_cost: ''
    }
  }

  componentDidMount(){
    this.getMenu()
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



  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          NoDB
        </p>
        <div className="menuHousing">
        <Menu menu={this.state.menu} />
        </div>
      </header>
    </div>
  )
  }
}

export default App;
