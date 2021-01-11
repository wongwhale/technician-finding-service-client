export const chatType = {}
chatType.ENTER_PRIVATE_CHAT = 'ENTER_PRIVATE_CHAT'
chatType.LEAVE_PRIVATE_CHAT = 'LEAVE_PRIVATE_CHAT'
chatType.APPEND_MESSAGE = 'APPEND_MESSAGE'
chatType.INITIAL_HISTORY_LIST = 'INITIAL_HISTORY_LIST'
chatType.DISCONNECT = 'DISCONNECT'

const initialState = {
    interlocutor : {
        id:'',
        name:''
    },
    messages : [],
    lists : [],
    cid:''
}

export default function chatReducer(state=initialState , action){
    switch (action.type) {
        case chatType.ENTER_PRIVATE_CHAT:
            return{
                ...state,
                interlocutor: action.payload.interlocutor,
                messages: action.payload.messages
            }
        case chatType.LEAVE_PRIVATE_CHAT:
            return{
                ...state,
                interlocutor : initialState.interlocutor,
                messages: initialState.messages
            }
        case chatType.APPEND_MESSAGE :
            return{
                ...state,
                messages: [...state.messages , action.payload]
            }
        case chatType.INITIAL_HISTORY_LIST:
            return{
                ...state,
                lists : action.payload.list
            }
        case chatType.DISCONNECT :
            return {
                state : initialState
            }
        default:    
            return state
    }
}