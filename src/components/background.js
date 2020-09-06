import React, { useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { fetchBackground } from '../actions/background.actions'

function Background({ children }) {

    const background = useSelector(state => state.background.url)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBackground())
    }, [])

    return (
        <div style={{
            display: 'flex',
            flex: 1,
            backgroundImage: `url(${background})`
        }}>
            {children}
        </div>
    )
}

export default Background