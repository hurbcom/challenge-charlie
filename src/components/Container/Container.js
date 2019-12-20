import React, { useState, useEffect } from 'react'
import { getBackgroundImage } from '../../helpers/utils'
import { Column, Row } from '../Grid/Grid'

import './Container.scss'

const Container = props => {
    const [backgroundImage, setBackgroundImage] = useState('')
    const init = async e => {
        const image = await getBackgroundImage()
        setBackgroundImage(`url(${image.url})`)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Row
            as='main'
            className='image_container'
            style={{ backgroundImage: backgroundImage }}
        >
          <Column className='components_list'>
            {props.children}
          </Column>
        </Row>
    )
}

export default Container
