import React from 'react'

import './style.scss'
const Loader = props => {
    const { sm, nm, lg, xlg } = props
    return (
        <div>
            {sm ? <div className="loader sm"></div> : null}
            {nm ? <div className="loader nm"></div> : null}
            {lg ? <div className="loader lg"></div> : null}
            {xlg ? <div className="loader xlg"></div> : null}

        </div>
    )
}


export default Loader