export const formType = {}
formType.SET_DATE_COUNT = 'SET_DATE_COUNT'
formType.SET_DATE = 'SET_DATE'
formType.SET_MONTH = 'SET_MONTH'
formType.SET_YEAR = 'SET_YEAR'
formType.SET_URI = 'SET_URI'
formType.SET_FILE = 'SET_FILE'
formType.SET_TYPE = 'SET_TYPE'
formType.SET_DETAIL = 'SET_DETAIL'

const initialState = {
    date_count : 30,
    date : 0,
    month : 1 ,
    year : 0,
    hour : 0,
    minute : 0,
    uri : '',
    type : '',
    file : [] ,
    detail : ''
}

export default function formReducer(state = initialState , action){
    switch (action.type) {
        case formType.SET_DATE_COUNT:
            return{
                ...state,
                date_count : action.payload.date_count
            }
        case formType.SET_DATE:
            return{
                ...state,
                date : action.payload.date
            }
        case formType.SET_MONTH:
            return{
                ...state,
                month : action.payload.month
            }
        case formType.SET_YEAR:
            return{
                ...state,
                year : action.payload.year
            }
        case formType.SET_TYPE:
            return{
                ...state,
                type : action.payload.type
            }
        case formType.SET_URI :
            return{
                ...state,
                uri : action.payload.uri
            }
        case formType.SET_FILE:
            return{
                ...state,
                file : action.payload.file
            }
        case formType.SET_DETAIL:
            return{
                ...state,
                detail : action.payload.detail
            }
        default:
            return state
    }
}