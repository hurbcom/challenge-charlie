import axios from 'axios'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import './index.css'
import Content from '../content'
import Loading from '../loading'
import { Container } from './styles'
import { snackbarOptions } from '../../utils'

const Main = () => {
    const { t } = useTranslation()
    const [image, setImage] = useState()
    const [openSnackbar] = useSnackbar(snackbarOptions)
    const [loading, setLoading] = useState(true)

    // load the background image from BING API
    useEffect(() => {
        fetchImage().finally(() => setLoading(false))
    }, [])

    const fetchImage = async () => {
        await axios
            .get(
                process.env.REACT_APP_PROXY_URL +
                    process.env.REACT_APP_REQUEST_IMAGE_URL
            )
            .then(({ data }) => {
                setImage(data.images[0]?.url)
            })
            .catch(() => {
                openSnackbar(t('bingImageFailed'))
            })
    }

    return loading ? (
        <Loading fullHeight />
    ) : (
        <Container image={image}>
            <Content />
        </Container>
    )
}

export default Main
