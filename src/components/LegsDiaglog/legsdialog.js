import React from 'react';
import Button from '../Button/button.js';
import Leg from '../Leg/leg';
import './legsdialog.css';

class LegsDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            legs: this.props.legs.length? this.props.legs : ["",""],
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
            legs.push(<Leg fromKey={this.state.legs[i]} toKey={this.state.legs[i+1]} id={i} key={i} onChanged={this.onChanged} />);
            i=i+2;
        }
        return (
            <div className="content">
                <div className="legs">
                {
                    legs.map(x =>{ return x;})
                }
                </div>
                <div className="dialogbutton">
                    <Button text="Add Leg" handlerClick={this.addLeg} className="redbutton"/> 
                    <Button text="Save"  handlerClick={this.saveLegs} className="redbutton"/>
                </div>
                <button className="ts-icon-close" data-ek-id="ek-modal-close" role="link">
                </button>
            </div>
        )
    }
}
export default LegsDialog;