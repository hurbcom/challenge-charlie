import React, { useState } from 'react'
import * as Styles from './tooltip.styles'

interface TooltipProps {
    text: string
    children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleMouseEnter = () => {
        setShowTooltip(true)
    }

    const handleMouseLeave = () => {
        setShowTooltip(false)
    }

    return (
        <Styles.Wrapper
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && <Styles.TooltipText>{text}</Styles.TooltipText>}
        </Styles.Wrapper>
    )
}
