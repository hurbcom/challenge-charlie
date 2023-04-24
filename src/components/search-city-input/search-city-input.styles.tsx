import { Box } from '@components/ui'
import { hexToRgba } from '@styles/utils.styles'
import { DESKTOP_BREAKPOINT } from '@utils/constants.utils'
import styled from 'styled-components'
import { ReactComponent as CompassIcon } from '../../assets/icons/compass.svg'

export const Wrapper = styled(Box)`
    width: 100%;
    height: 100%;
    position: relative;
`

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
    fill: ${(props) => props.theme.typography.colors.secondary};
`

export const Input = styled.input`
    width: 100%;
    height: 80px;
    background-color: ${(props) =>
        hexToRgba(props.theme.typography.colors.contrastBackground, 0.9)};
    font-size: 28px;
    font-weight: bold;
    border: 0;
    color: ${(props) => props.theme.typography.colors.secondary};
    :focus {
        outline: none;
    }
    padding: 16px;
    padding-left: 80px;
    @media (max-width: ${DESKTOP_BREAKPOINT}px) {
        height: 40px;
        font-size: 18px;
    }
`

export const SuggestionList = styled.ul`
    position: absolute;
    z-index: 999999;
    margin-top: 80px;
    padding: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: ${(props) =>
        props.theme.typography.colors.contrastBackground};
    border: 1px solid ${(props) => props.theme.typography.colors.hover};
    list-style: none;
`

export const SuggestionItem = styled.li`
    padding: 24px 16px;
    font-size: 22px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.typography.colors.hover};
    }
`
