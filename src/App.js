import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = { 
      userInput: '',
      list: [],
    }
  }

  changeUserInput(input){
    this.setState(
      {
      userInput: input,
    }
  );
  }

  addToDoList(input){
    let listArray = this.state.list
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: '',
    }
    )
  }


  render() {
    return (
// aggiungi titolo il H1, 
      <div className='to-do-list'>

        <input
          onChange={ (e) => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type='text'
          placeholder='write here your to-do list'
          onKeyUp={ (event) => event.keyCode === 13 ? this.addToDoList(this.state.userInput): null}
       />
    
        <button 
          className='button'
          onClick={ () => this.addToDoList(this.state.userInput)}
          > What's next? </button>
        <div className='list'>
          <ul>
            {this.state.list.map( (val)=> <li> {val} </li> )}
          </ul>
        </div>
      </div>
      

    );
  }
}

export default App;
