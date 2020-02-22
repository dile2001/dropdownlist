import React from 'react';
import logo from './logo.svg';
import './App.css';

function AgeCalculator(props){
  return(
    <div>Age: {new Date().getFullYear() - props.yearOfBirth}</div>    
  );
}
export default AgeCalculator;

