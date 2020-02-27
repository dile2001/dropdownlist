import React from 'react';
import Button from './Button/button.js';
import Leg from './leg';
import AirportDropdown from './airportdropdown.js';
import { throwStatement } from '@babel/types';
class LegsDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            legs: this.props.legs,
            
        }
        this.addLeg = this.addLeg.bind(this);
        this.saveLegs = this.saveLegs.bind(this);
        this.onChanged= this.onChanged.bind(this);
       
    }
    onChanged = (key,id) => {
        var legstemp = this.state.legs;
        legstemp[id] = key;
        this.setState({
            legs:legstemp
        })
    }
    
    saveLegs = () => {
        this.props.saveLegs(this.state.legs);
    }
    addLeg = () => {
        this.state.legs.push("");
        this.state.legs.push("");
        this.setState({legs: this.state.legs});
    }
    render(){
        let i = 0;
        let legs = [];
        while(i<this.state.legs.length){
            legs.push(<Leg fromKey={this.state.legs[i]} toKey={this.state.legs[i+1]} id={i} onChanged={this.onChanged} />);
            i=i+2;
        }
        return (
            <React.Fragment>
             {
                legs.map(x =>{ return x;})
             }
            <Button text="Add Leg" handlerClick={this.addLeg} className="redbutton"/> 
            <Button text="Save"  handlerClick={this.saveLegs} className="redbutton"/>
            </React.Fragment>
        )
    }
}
export default LegsDialog;