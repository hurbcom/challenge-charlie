import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeNotification } from '../actions/notifications.actions'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'

function Notification() {

    const dispatch = useDispatch()

    const message = useSelector(state => state.notifications.message)

    return (
        <Dialog onClose={() => dispatch(closeNotification())} open={!!message}>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeNotification())}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Notification