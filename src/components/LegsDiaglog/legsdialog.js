import React from 'react';
import Button from '../Button/button.js';
import Leg from '../Leg/leg';
import './legsdialog.css';
import { validate } from '@babel/types';

class LegsDialog extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            legs: this.props.legs.length? this.props.legs : ["",""],
            valid:true,
            legstmp:this.props.legs.length? this.props.legs : ["",""]
        }
        
        
        
        this.legstmp = this.props.legs;
       
    }
    onChanged = (key,id) => {
        var tmp = this.state.legstmp;
        tmp[id] = key;
        this.setState({
            legstmp:tmp
        })
    }
    closeDialog = ()=>{
        document.getElementById("legs").style.display="none";
        this.setState({
            legstmp:this.state.legs
        })
        
    }
    saveLegs = () => {
        if(this.validate()){
            this.state.legs = this.state.legstmp;
            this.props.saveLegs(this.state.legs);
        }
        else{
            this.setState({
                valid:false
            });
        }
    }
    validate = ()=> {
        return !this.state.legstmp.some(x=> x=="");
    }
    addLeg = () => {
        this.state.legstmp.push("");
        this.state.legstmp.push("");
        this.setState({legstmp: this.state.legstmp});
    }
    render(){
        let i = 0;
        let legs = [];
        while(i<this.state.legstmp.length){
            legs.push(<Leg fromKey={this.state.legstmp[i]} toKey={this.state.legstmp[i+1]} id={i} key={i} onChanged={this.onChanged} 
                fromError={!this.state.valid && !this.state.legstmp[i] ? "Please select departure airport " : ""} 
                toError={!this.state.valid && !this.state.legstmp[i+1] ? "Please select arrival airport" : ""}
                />);
            i=i+2;
        }
        this.state.valid=true;
        return (
            <div id="legs" className="legsdialog">
                <div className="ts-mask"></div>
                <div className="content">
                    <div className="legs">
                    {legs}
                    </div>
                    <div className="dialogbutton">
                        <Button text="Add Leg" handlerClick={this.addLeg} className="redbutton"/> 
                        <Button text="Save"  handlerClick={this.saveLegs} className="redbutton"/>
                    </div>
                    <Button className="ts-icon-close" handlerClick={this.closeDialog} data-ek-id="ek-modal-close" />
                </div>
            </div>
            
        )
    }
}
export default LegsDialog;