import React from 'react'
import { useAxios } from 'use-axios-client'
import './index.css'
import Content from '../content'
import Loading from '../loading'
import { Container } from './styles'

const Main = () => {
    const { data, loading } = useAxios({
        url:
            process.env.REACT_APP_PROXY_URL +
            process.env.REACT_APP_REQUEST_IMAGE_URL,
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
