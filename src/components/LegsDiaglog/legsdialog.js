import React from 'react';
import Button from '../Button/button.js';
import Leg from '../Leg/leg';
import './legsdialog.css';


class LegsDialog extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            valid:true,
        }
    }
   
    onChanged = (key,id) => {
        this.props.onChanged(key,id);
    }
    closeDialog = ()=>{
              
        this.props.closeDialog();
              
    }
    saveLegs = () => {
        this.props.saveLegs();
      
    }
    
    addLeg = () => {
        
        this.props.addLeg();
    }
    
    render(){
        let i = 0;
        let legstmp = this.props.legs;
        let legComps = [];
        
        while(i< legstmp.length){
            legComps.push(<Leg fromKey={legstmp[i]} key={i+":"+this.props.routeIndex} toKey={legstmp[i+1]} id={i} rInd={this.props.routeIndex} onChanged={this.onChanged} 
                fromError={!this.props.valid && !legstmp[i] ? "Please select departure airport " : ""} 
                toError={!this.props.valid && !legstmp[i+1] ? "Please select arrival airport" : ""}
                />);
            i=i+2;
        }
        
        return (
            <div id="legs" className="legsdialog" style={this.props.open? {display:''} : {display:'none'}}>
                <div className="ts-mask"></div>
                <div className="content">
                    <div className="legs">
                    {legComps}
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