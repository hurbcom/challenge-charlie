import React from 'react'


export default props => {
return (
    <div className={props.className} style={props.style} onClick={props.onClick}>
        {props.children}
    </div>)
}