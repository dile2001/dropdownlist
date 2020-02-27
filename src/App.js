import React from 'react';
import AirportDropdown from './components/airportdropdown.js';
import LegsDialog from './components/legsdialog';
import './App.css';
import Button from './components/Button/button.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {legs:[],legsInStr: ""};
    this.saveLegs = this.saveLegs.bind(this);
  }
  toggleSelected(id, key){
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  };
  
  componentDidMount(){
    document.querySelector('#legs').style.display = "none";
  }
  
  editHandler = () => {
    document.querySelector('#legs').style.display = "";
  }
  concatLegs = function(legs){
    var ret = "";
    if(legs) {
      ret = legs.join("-");
    }
    return ret;
  }
  saveLegs = (legs) => {
    const c = this.concatLegs(this.state.legs);
    this.setState(
      {legs: legs,
        legsInStr: c
      }
    );
    document.querySelector('#legs').style.display = "none";
  }
  
  render() {
    return (
      <div  class="App-legs">
        <div>{this.state.legsInStr} </div>
        <div><Button text="Edit" handlerClick={this.editHandler} className="redbutton"/></div>
        <div id="legs" ><LegsDialog legs={this.state.legs} saveLegs={this.saveLegs} /></div>
      </div>
    );
  }
}
export const AgeCalculator = (props) => {
  return(
    <div>Age: {new Date().getFullYear() - props.yearOfBirth}</div>    
  );
}
export default App;


