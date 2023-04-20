import { env } from '@config/env'
import styled from 'styled-components'

export const Background = styled.div<{ url?: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-image: url(${(props) => `${env.BING_URL}${props.url}`});
    background-color: #222;
    background-size: cover;
    background-position: center center;
`
