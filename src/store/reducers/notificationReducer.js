export const notiType = {
    ADD_TECH_ORDER : 'ADD_TECH_ORDER',
    REMOVE_TECH_ORDER : 'REMOVE_TECH_ORDER',
    ADD_USER_RESPONSE : 'ADD_USER_RESPONSE',
    REMOVE_USER_RESPONSE : 'REMOVE_USER_RESPONSE',
}

const initialState = {
    tech_order : [

    ],
    user_res : [],
    badge : 0,
}

export default function notificationReducer (
    state = initialState,
    action
) {
    switch (action.type) {
        case notiType.ADD_TECH_ORDER:
            return{
                ...state,
                tech_order : [...state.tech_order , action.payload]
            }
        case notiType.REMOVE_TECH_ORDER:
            return{
                ...state,
                tech_order : state.tech_order.filter( (val) => {
                    return val !== action.payload
                })
            }
        default:
            return state
    }
}