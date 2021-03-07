import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import WEB_URL from "../../misc/web_url"
import { notiType } from "../reducers/notificationReducer"

export const addNewOrder = ( order ) => dispatch => {
    dispatch({
        type : notiType.ADD_TECH_ORDER,
        payload : order
    })
}

export const removeOrder = (formID , userID) => dispatch => {
    AsyncStorage.getItem('token').then( token => {
        axios({
            url: WEB_URL,
            method: "post",
            data: {
                query: `
                mutation{
                    techIgnoreForm(formID :"${formID}" , userID:"${userID}")
                  }
                `,
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        }).then( res => {
            console.log(res.data.data.techIgnoreForm);
        }).catch( err => {
            console.log(err);
        })
    })
    dispatch({
        type : notiType.REMOVE_TECH_ORDER,
        payload : {
            _id : formID
        }
    })
}

export const addNewResponse = ( payload ) => dispatch => {
    return new Promise( (resovle , reject) => {
        dispatch({
            type : notiType.ADD_USER_RESPONSE,
            payload : payload
        })
        resovle()
    })
}

export const removeCandidateTech = (_id) => dispatch => {
    dispatch({
        type : notiType.REMOVE_USER_RESPONSE,
        payload : _id
    })
}

export const addAcceptedOrder = (order) => dispatch => {
    dispatch({
        type : notiType.ADD_ACCECTED_TECH_ORDER,
        payload : order
    })
} 

export const removeAcceptedOrder = (_id) => dispatch => {
    dispatch ({
        type : notiType.REMOVE_ACCECTED_TECH_ORDER,
        payload : {
            _id : _id
        }
    })
}