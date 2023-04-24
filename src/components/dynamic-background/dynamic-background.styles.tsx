import { Box } from '@components/ui'
import { env } from '@config/env'
import styled from 'styled-components'

export const Background = styled.div<{ url?: string }>`
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    background-image: url(${(props) => `${env.BING_URL}${props.url}`});
    background-color: #222;
    background-size: cover;
    background-position: center center;
`

export const Overlay = styled(Box)<{ show: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    background-color: ${(props) =>
        props.show ? 'rgba(0, 0, 0, 0.4)' : 'none'};
`
