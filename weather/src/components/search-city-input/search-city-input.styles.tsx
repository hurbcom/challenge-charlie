import { Box } from '@components/ui'
import styled from 'styled-components'

import CompassIcon from '@assets/icons/compass.svg'

export const InputWrapper = styled(Box)`
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
`
export const StartIcon = styled(CompassIcon)`
    width: 40px;
    height: 40px;
    padding-left: 16px;
    position: absolute;
    margin: auto 0;
    color: #fff;
`

export const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 28px;
    border: 0;
    :focus {
        outline: none;
    }
    padding: 16px;
    padding-left: 80px;
`
