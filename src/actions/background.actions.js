import { getCurrentBackgroundImage } from "../services/background.service"

export const FETCH_BACKGROUND_INIT = 'Fetch::Background::Init'
export const FETCH_BACKGROUND_DONE = 'Fetch::Background::Done'
export const FETCH_BACKGROUND_FAIL = 'Fetch::Background::Fail'

export const fetchBackgroundInit = () => ({
    type: FETCH_BACKGROUND_INIT
})

export const fetchBackgroundDone = (background) => ({
    type: FETCH_BACKGROUND_DONE,
    payload: background
})

export const fetchBackgroundFail = (err) => ({
    type: FETCH_BACKGROUND_FAIL
})

export const fetchBackground = () => async (dispatch) => {
    try {
        dispatch(fetchBackgroundInit())
        const currentBackground = await getCurrentBackgroundImage()
        dispatch(fetchBackgroundDone(currentBackground))
    } catch (err) {
        dispatch(fetchBackgroundFail(err))
    }
}