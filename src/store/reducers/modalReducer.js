import { exp } from "react-native-reanimated"

export const modalType = {}
modalType.OPEN_DATE_PICKER_MODAL = 'OPEN_DATE_PICKER_MODAL'
modalType.CLOSE_DATE_PICKER_MODAL = 'CLOSE_DATE_PICKER_MODAL'

const initialState = {
    date_picker : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case modalType.OPEN_DATE_PICKER_MODAL:
            return {
                date_picker: true
            }
        case modalType.CLOSE_DATE_PICKER_MODAL:
            return {
                date_picker: false
            }
        default:
            return state
    }
} 
