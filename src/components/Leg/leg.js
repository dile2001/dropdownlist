import React from 'react';
import AirportDropdown from '../AirportDropdown/airportdropdown.js';
import './leg.css';
const Leg = (props) => {
    
        return (
            <div className="leg">
                <div className="cell label">From:</div> 
                <div className="cell"><AirportDropdown selectedKey={props.fromKey} error={props.fromError} onChanged={props.onChanged} id={props.id}/></div>
                <div className="cell label">  To:</div>
                <div className="cell"> <AirportDropdown selectedKey={props.toKey} error={props.toError} onChanged={props.onChanged} id={props.id+1}/></div>
            </div>
        )
}
export default Leg;