import React from 'react'

const TempChange = props => (
    <div>
      <p className="unit" onClick={props.onClick}>{props.text}</p>
    </div>
  );

  export default TempChange;