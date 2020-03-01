import React from 'react';
import LegsDialog from './components/LegsDiaglog/legsdialog.js';
import './App.css';
import Button from './components/Button/button.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {legs:[]};
    this.saveLegs = this.saveLegs.bind(this);
    this.legsInStr = "";
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
    this.legsInStr = this.concatLegs(legs);
    this.setState(
      {legs: legs}
    );
    document.querySelector('#legs').style.display = "none";
    document.querySelector('#trip').style.display = "";
  }
  
  render() {
    return (
      <div  className="App-legs">
        <div id="trip" className="trip">{this.legsInStr? this.legsInStr : "You have no trips, click New to enter your trip"} 
        
        <div>
        <Button text={this.legsInStr?"Edit": "New"} handlerClick={this.editHandler} className="redbutton"/>
        </div>
        </div>
        <LegsDialog legs={this.state.legs} saveLegs={this.saveLegs}  />
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


