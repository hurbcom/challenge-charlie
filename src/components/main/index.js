import React from 'react'
import { useAxios } from 'use-axios-client'

import Content from '../content'
import Loading from '../loading'
import { Container } from './styles'

const PROXY_URL = 'https://thingproxy.freeboard.io/fetch/'
const REQUEST_IMAGE_URL =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

const Main = () => {
    const { data, loading } = useAxios({
        url: PROXY_URL + REQUEST_IMAGE_URL,
    })

    return (
        <>
            {loading && <Loading fullHeight />}
            {data && (
                <Container image={data.images[0]?.url}>
                    <Content />
                </Container>
            )}
        </>
    )
}

export default Main
