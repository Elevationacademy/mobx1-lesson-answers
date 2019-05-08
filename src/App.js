import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './components/Item';
import './App.css';

@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    return (
      <div className="App">
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
        {this.props.store.list.map((i,ind) => <Item item = {i} 
                                                    key = {ind}
                                                    store = {this.props.store}/>
          )}
          <div id="home-background"></div>
      </div>
    );
  }
}

export default App;
