export const techType = {}
techType.SET_SEARCH_KEY_WORD = 'SET_SEARCH_KEY_WORD'

const initialState = {
    keyword : ''
}

export default function technicianReducer (state = initialState , action) {
    switch (action.type) {
        case techType.SET_SEARCH_KEY_WORD:
            return {
                ...state,
                keyword : action.payload.keyword
            }
    
        default:
            return state;
    }
}