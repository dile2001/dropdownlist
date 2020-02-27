import React from 'react';
import LegsDialog from './components/LegsDiaglog/legsdialog.js';
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
    document.querySelector('#trip').style.display = "none";

  }
  concatLegs = function(legs){
    var ret = "";
    if(legs) {
      ret = legs.join("-");
    }
    return ret;
  }
  saveLegs = (legs) => {
    const c = this.concatLegs(legs);
    this.setState(
      {legs: legs,
        legsInStr: c
      }
    );
    document.querySelector('#legs').style.display = "none";
    document.querySelector('#trip').style.display = "";
  }
  
  render() {
    return (
      <div  className="App-legs">
        <div id="trip">{this.state.legsInStr? this.state.legsInStr : "You have no trips, click New to enter your trip"} 
        <Button text={this.state.legsInStr?"Edit": "New"} handlerClick={this.editHandler} className="redbutton"/></div>
        <div id="legs" className="legsdialog">
          <div className="ts-mask"></div>
         
            <LegsDialog legs={this.state.legs} saveLegs={this.saveLegs} />
          
        </div>
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


