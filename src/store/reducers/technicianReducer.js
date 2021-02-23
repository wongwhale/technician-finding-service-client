export const techType = {}
techType.SET_SEARCH_KEY_WORD = 'SET_SEARCH_KEY_WORD'
techType.SET_SEARCH_LIST = 'SET_SEARCH_LIST'
techType.SET_TECHNICIAN_INFO = 'SET_TECHNICIAN_INFO'
techType.SET_TID = 'SET_TID'
techType.CLEAR = 'TECHNICIAN_REDUCER_CLEAR'

const initialState = {
    keyword : '',
    search_list : [],
    info : {
        aptitude : [],
        personalInfo : {},
        onSite : false,
        star : 0,
        workDay : [],
        workTime : {

        },
    },
    tid : ''
}

export default function technicianReducer (state = initialState , action) {
    switch (action.type) {
        case techType.SET_SEARCH_KEY_WORD:
            return {
                ...state,
                keyword : action.payload.keyword
            }
        case techType.SET_SEARCH_LIST:
            return {
                ...state,
                search_list : action.payload.search_list
            }
        case techType.SET_TID:
            return{
                ...state,
                tid : action.payload.tid
            }
        case techType.SET_TECHNICIAN_INFO:
            return{
                ...state,
                info : {
                    aptitude : action.payload.aptitude,
                    personalInfo : action.payload.personalInfo,
                    onSite : action.payload.onSite,
                    star : action.payload.star,
                    location : action.payload.location,
                    workDay : action.payload.workDay,
                    workTime : action.payload.workTime
                }
            }
        case techType.CLEAR :
            return state = initialState
        default:
            return state;
    }
}