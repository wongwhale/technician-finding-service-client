export const regType = {}
regType.SET_USERNAME_PASSWORD = 'SET_USERNAME_PASSWORD'
regType.SET_FIRSTNAME = 'SET_FIRSTNAME'
regType.SET_LASTNAME = 'SET_LASTNAME'
regType.SET_ROLE = 'SET_ROLE'
regType.SET_PHONE = 'SET_PHONE'
regType.CLEAR = 'CLEAR'

const initialState = {
    username : '',
    password : '',
    firstname : '',
    lastname : '',
    role : '',
    phone : ''
}


export default  regReducer = (state = initialState  , action) => {
    switch (action.type) {
        case regType.SET_USERNAME_PASSWORD:
            return{
                ...state,
                username : action.payload.username,
                password : action.payload.password
            }
        case regType.SET_FIRSTNAME :
            return{
                ...state,
                firstname : action.payload.firstname,
            }
        case regType.SET_LASTNAME:
            return{
                ...state,
                lastname : action.payload.lastname
            }
        case regType.SET_ROLE:
            return{
                ...state,
                role : action.payload.role
            }
        case regType.SET_PHONE:
            return{
                ...state,
                phone : action.payload.phone
            }
        case regType.CLEAR:
            return state = initialState
        default:
            return state
    }
}