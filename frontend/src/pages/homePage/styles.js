import styled from 'styled-components'

export const Icons = styled.img`
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;  
`

export const Results = styled.div`
    background: rgba(242, 241, 242, 1);
    border-radius: 10px;
    position: absolute;
    padding: 1% 0;
    z-index: 2;
    `

export const Option = styled.div`
    margin: 1% 0;
    padding: 0.5% 1%;
    cursor: pointer;
    &:hover {
        background: #C3BEBE;
    }

`