import React from 'react';
import AirportDropdown from '../AirportDropdown/airportdropdown.js';
import './leg.css';
const Leg = (props) => {
    
        return (
            <div className="leg" key={props.id+":"+ props.rInd}>
                <div className="cell label">From:</div> 
                <div className="cell"><AirportDropdown dkey={"0" + props.id+":"+ props.rInd} selectedKey={props.fromKey} 
                error={props.fromError} onChanged={props.onChanged} id={props.id} key={"0" + props.id+":"+ props.rInd}/></div>
                <div className="cell label">  To:</div>
                <div className="cell"> <AirportDropdown dkey={"1"+props.id+":"+ props.rInd}
                 selectedKey={props.toKey} error={props.toError} 
                 key={"1" + props.id+":"+ props.rInd}
                onChanged={props.onChanged} id={props.id+1}/></div>
            </div>
        )
}
export default Leg;