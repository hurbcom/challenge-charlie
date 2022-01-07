import React from 'react'
import { useAxios } from 'use-axios-client'

import { Container, LoaderBox, Loading } from './styles'

const PROXY_URL = 'https://thingproxy.freeboard.io/fetch/'
const REQUEST_IMAGE_URL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

const App = () => {
    const { data, loading } = useAxios({
        url: PROXY_URL + REQUEST_IMAGE_URL
    })

    return (
        <>
            {loading && (
                <LoaderBox>
                    <Loading />
                </LoaderBox>
            )}
            {data && (
                <Container image={data.images[0]?.url}>
                    <header>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className='App-link'
                            href='https://reactjs.org'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Learn React
                        </a>
                    </header>
                </Container>
            )}
        </>
    )
}

export default App
