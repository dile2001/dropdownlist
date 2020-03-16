import React from 'react';
import Dropdown from '../Dropdown/dropdown.js';

const airports = [
    { label: "Dubai", key: "DXB" },
    { label: "London", key: "LHR" },
    { label: "Singapore", key: "SIN" },
    { label: "Sai Gon", key: "SGN" },
    { label: "Kochi", key: "COK" },
    { label: "Mumbai", key: "BUM" },
  ];
  
const AirportDropdown = (props) => {
    return ( <Dropdown list={airports} dkey={props.dkey} key={props.dkey} title="Select airport" error={props.error} id={props.id} selectedKey={props.selectedKey} onChanged={props.onChanged}/>)
}
export default AirportDropdown;