import React, { Component, Fragment  } from 'react';
import Popup from './popup.js'
import './App.css'



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: '',
      list: [],
      disable: false
    }
  }

  handleArrLength() {
    this.setState( 
      {
        disabled: !this.state.disabled
      } 
    )
  } 

  changeUserInput(input){
    this.setState(
      {
      userInput: input,
    }
  );
  }

  addToDoList(input){
    const listArray = [ ...this.state.list, input]

    this.setState({
      list: listArray,
      userInput: '',
      counter: this.state.counter + 1
    }
    )
  }

  //click = index nel render, posiione elem nell array 
  delateInput(click){

    const newList = [ ...this.state.list]

    newList.splice(click,1)

    this.setState(
      {
        list: newList
      }
    )
    }


    maxArr(click){

      const limitedList = [...this.state.list]

      limitedList.splice(0,9)

      this.setState({
        list: limitedList
      })
    }


  render() {


    return ( 
      <div className='popup'>
      {(this.state.list.length >= 10 )? <Popup/> : null}
      <div className='to-do-list'>

        <h1> My To-Do List </h1>
        <input
          onChange={ (e) => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type='text'
          placeholder='write here your to-do list'
          onKeyUp= {(event) => event.keyCode === 13 ? this.addToDoList(this.state.userInput): null}

          disabled= {this.state.list.length === 10 ? true : false}
          //disabled={(this.state.list.length = 10) ? true : false}
          //disabled= {!this.props.isEditMode}
          
          // onClick= { (event) => this.state.list.length <= 10? this.handleArrLength.bind(this): null}>
       />
    
        <button 
          className='myButton'
          onClick={ () => this.addToDoList(this.state.userInput)}
          > What's next? 
        </button>

        <div className='list'>
          <ol>
            {this.state.list.map( (val, index) => 
                
              // {/* fragment non viene renderizzato  */}
              
              <li key={"listE" + index}> 
              
              <span> {index+1}</span>
              <span> {val} </span>
              <button 
              data-id={index}    //lo uso per posizioni giuste, e' di default..poi lo richiamo con dataset.id
              className= 'button-yo'
              // onClick= {(e) => {this.setState({list: this.state.list.splice(e.target.attributes.attr.value,1)})}}
              onClick = { (e) => this.delateInput(e.target.dataset.id)}
              > 
              <span>&#9996;</span>
              
              </button> 
 
              </li>
            
            )}
              
          </ol>
        </div>
      </div>


      </div>
      

    );
  }
}

export default App;
