import styled from 'styled-components'

export const Wrapper = styled.span`
    position: relative;
`

export const TooltipText = styled.span`
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    font-size: ${(props) => props.theme.typography.sizes.body};
    color: ${(props) => props.theme.typography.colors.secondary};
    background-color: ${(props) =>
        props.theme.typography.colors.contrastBackground};
    border-radius: 4px;
    pointer-events: none;
    white-space: nowrap;
`
