import React from 'react'

const Text = props => (
    <div 
      className={props.className}
      onClick={ props.onClick }>
      <p>{props.text}</p>
    </div>
  );

  export default Text;