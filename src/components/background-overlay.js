import React from 'react'

function BackgroundOverlay({ children }) {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.7)',
                flexDirection: 'column'
            }}
        >
            {children}
        </div>
    )
}

export default BackgroundOverlay