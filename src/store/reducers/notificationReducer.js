export const notiType = {
    ADD_TECH_ORDER: 'ADD_TECH_ORDER',
    REMOVE_TECH_ORDER: 'REMOVE_TECH_ORDER',
    ADD_USER_RESPONSE: 'ADD_USER_RESPONSE',
    REMOVE_USER_RESPONSE: 'REMOVE_USER_RESPONSE',
    ADD_ACCECTED_TECH: 'ADD_ACCECTED',
    REMOVE_ACCECTED_TECH: 'REMOVE_ACCECTED_TECH',
    ADD_ACCECTED_TECH_ORDER: 'ADD_ACCECTED_TECH_ORDER',
    REMOVE_ACCECTED_TECH_ORDER: 'REMOVE_ACCECTED_TECH_ORDER',
    CLEAR : 'NOTIFICATION_REDUCER_CLEAR',
    SET_USER_RESPONSE : 'SET_USER_RESPONSE',
}

const initialState = {
    techOrder: [

    ],
    userResponse: [

    ],
    techAcceptedOrder : [

    ],
    badge: 0,
}

export default function notificationReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case notiType.ADD_TECH_ORDER:
            return {
                ...state,
                techOrder: [...state.techOrder, action.payload]
            }
        case notiType.REMOVE_TECH_ORDER:
            return {
                ...state,
                techOrder: state.techOrder.filter((val) => {
                    return val._id !== action.payload._id
                })
            }
        case notiType.ADD_USER_RESPONSE:
            return {
                ...state,
                userResponse: [...state.userResponse, action.payload]
            }
        case notiType.REMOVE_USER_RESPONSE:
            return {
                ...state,
                userResponse: state.userResponse.filter(val => {
                    return val._id !== action.payload._id
                })
            }
        case notiType.ADD_ACCECTED_TECH:
            return {
                ...state,
                userResponse: state.userResponse.map(val => {
                    if (action.payload._id === val._id) {
                        return {
                            ...val,
                            acceptedTech: val.acceptedTech.concat('1')
                        }
                    }
                    else return val
                })
            }
        case notiType.REMOVE_ACCECTED_TECH:
            return {
                ...state,
                userResponse: {
                    ...state.userResponse,
                    acceptedTech: state.acceptedTech.filter(val => {
                        return val._id !== action.payload._id
                    })
                }
            }
        case notiType.ADD_ACCECTED_TECH_ORDER :
            return {
                ...state,
                techAcceptedOrder : [...state.techAcceptedOrder , action.payload]
            }
        case notiType.REMOVE_ACCECTED_TECH_ORDER :
            return{
                ...state,
                techAcceptedOrder : state.techAcceptedOrder.filter( val => {
                    return val._id !== action.payload._id
                })
            }
        case notiType.SET_USER_RESPONSE :
            return {
                ...state,
                userResponse : action.payload
            }
        case notiType.CLEAR:
            return state = initialState
        default:
            return state
    }
}