import { modalType } from "../reducers/modalReducer"

export const OPEN_DATE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.OPEN_DATE_PICKER_MODAL
    })
}

export const CLOSE_DATE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.CLOSE_DATE_PICKER_MODAL
    })
}