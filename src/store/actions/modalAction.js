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

export const OPEN_POST_MODAL = () => dispatch => {
    dispatch({
        type : modalType.OPEN_POST_MODAL
    })
}

export const CLOSE_POST_MODAL = () => dispatch => {
    dispatch({
        type : modalType.CLOSE_POST_MODAL
    })
}

export const OPEN_TIME_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.OPEN_TIME_PICKER_MODAL
    })
}

export const CLOSE_TIME_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.CLOSE_TIME_PICKER_MODAL
    })
}

export const OPEN_SELECT_TYPE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.OPEN_SELECT_TYPE_MODAL
    })
}

export const CLOSE_SELECT_TYPE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.CLOSE_SELECT_TYPE_MODAL
    })
}

export const OPEN_IMAGE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.OPEN_IMAGE_PICKER_MODAL
    })
}

export const CLOSE_IMAGE_PICKER_MODAL = () => dispatch => {
    dispatch({
        type : modalType.CLOSE_IMAGE_PICKER_MODAL
    })
}