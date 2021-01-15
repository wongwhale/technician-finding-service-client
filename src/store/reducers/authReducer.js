export const authType = {}
authType.LOGIN_SUCCESS = 'LOGIN_SUCCESS'
authType.LOGIN_FAIL = 'LOGIN_FAIL'
authType.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
authType.LOADING = 'LOADING'
authType.LOADED = 'LOADED'

const initialState = {
    isLoading: false,
    isAuth: false,
    userInfo: {
        firstname: '',
        lastname: '',
        role: '',
        uid: '',
        avatar : ''
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userInfo: action.payload
            }
        case authType.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuth: false
            }
        case authType.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                userInfo: initialState.userInfo
            }
        case authType.LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case authType.LOADED:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}