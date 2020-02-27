import React from 'react';
import AirportDropdown from './airportdropdown';
const Leg = (props) => {
    
        return (
            <div>
                From: <AirportDropdown selectedKey={props.fromKey} onChanged={props.onChanged} id={props.id}/> 
                To: <AirportDropdown selectedKey={props.toKey} onChanged={props.onChanged} id={props.id+1}/>
            </div>
        )
}
export default Leg;