import React from 'react';
import LegsDialog from './components/LegsDiaglog/legsdialog.js';
import './App.css';
//import Button from './components/Button/button.js';
import Button from '@material-ui/core/Button';


import {BrowserRouter as Router,Route,Switch, Link as RouteLink } from 'react-router-dom';

class App extends React.Component {
    render(){
    return (
      <Router>
        <Button to="/" component={RouteLink} color="primary">Home</Button>
        <Button to="/flightRoutes" component={RouteLink} color="primary">Route</Button>
        <Button to="/ageCalculator" component={RouteLink} color="primary">Age Calculator</Button>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/flightRoutes">
            <FlightRoutes />
          </Route>
          <Route path="/ageCalculator">
            <AgeCalculator yearOfBirth={2000}/>
          </Route>
        </Switch>
      </Router>    
      // <div><RoutesE/></div>
      
      );
    }
}

function Home(){
  return(
    <div>Home</div>
  )
}
class FlightRoutes extends React.Component {
  constructor(){
    super();
    this.state = {routes:[], 
      openDialog:false, 
      isNewRoute: true, 
      selectedIndex:0,
      legs:[],
      valid:true

    };
  }
  
  addNewRoute = ()=> {
    this.setState({
      openDialog:true,
      isNewRoute:true,
      legs:["",""]
    })
  }
  editLeg = (i) => {
    this.setState({
      openDialog:true,
      isNewRoute: false,
      selectedIndex:i,
      legs:this.state.routes[i].split("-")
    })
  }
  saveLegs = () => {
    if(this.state.valid){
      if(this.state.isNewRoute){
        this.state.routes.push(concatLegs(this.state.legs));
      }
      else{
        this.state.routes[this.state.selectedIndex] = concatLegs(this.state.legs);
      }
      this.setState({openDialog: false});
    }
    else{
      this.setState({valid:false});
    }
  }
  closeDialog = () => {
    this.setState({
      openDialog:false,
      valid:true
    });
  }
  addLeg = () => {
    this.state.legs.push("");
    this.state.legs.push("");
    this.setState({
      legs:this.state.legs
    });
  }
  validate = ()=> {
    this.state.valid = !this.state.legs.some(x=> x==="");
  }
  onChanged = (key,id) => {
    this.state.legs[id] = key;
  }
  showDialog = () => {
    if(this.state.openDialog){
      let routeIndex= this.state.isNewRoute?this.state.routes.length : this.state.selectedIndex;
      return <LegsDialog legs={this.state.legs} valid={this.state.valid} 
      saveLegs={this.saveLegs}    routeIndex={routeIndex}
      key={routeIndex}
      open={this.state.openDialog} closeDialog={this.closeDialog} 
      addLeg={this.addLeg} onChanged={this.onChanged}
      />;
    }
    else{
      return null;
    }
  }
  render(){
    
    return (
      <div  className="App-legs" key="Route">
        {this.state.routes.map( function(x,i)  {
           return <RouteLeg editLeg={this.editLeg} index={i} legsInStr={x} key={i}/>
        }.bind(this))}
      <Button  onClick={this.addNewRoute} color="primary"> Add new route</Button>
      {this.showDialog()}
      </div>
    )

  }
}
const concatLegs = (legs) => {
  var ret = "";
  if(legs) {
    ret = legs.join("-");
  }
  return ret;
}
class RouteLeg extends React.Component{
  
  toggleSelected(id, key){
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  };
  
  
  
  editHandler = () => {
    //document.querySelector('#legs').style.display = "";
    this.props.editLeg(this.props.index);
  }
  
  concatLegs = function(legs){
    var ret = "";
    if(legs) {
      ret = legs.join("-");
    }
    return ret;
  }
  // saveLegs = (legs) => {
  //   this.legsInStr = this.concatLegs(legs);
  //   this.setState(
  //     {legs: legs}
  //   );
  //   document.querySelector('#legs').style.display = "none";
  //   document.querySelector('#trip').style.display = "";
  // }
  
  render() {
    return (
      

        <div id="trip" className="trip" key={this.props.index}>
          {this.props.legsInStr? this.props.legsInStr : "You have no trips, click New to enter your trip"} 
        
          
          <Button  onClick={this.editHandler} >Edit</Button>
          
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


