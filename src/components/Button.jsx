import React from 'react';

const Button = (props) => {
  const buttonStyle = {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '15px',
    margin: '5px'
  }
  return (
    <div>
       <button style={buttonStyle} onClick={() => props.fn()}>{props.title}</button>
    </div>
  );
}

export default Button;
