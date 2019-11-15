import React from "react";

/*  
The button component takes three props: handleClick, color and type.
handleClick: a callback function
type: any of the Bootstrap button types
text: the text of the button 
*/
const Button = props => {
  return (
    <div>
      <button onClick={props.handleClick} className={`btn ${props.type}`}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
