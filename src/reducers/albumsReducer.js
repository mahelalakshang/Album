import {ALBUM_GET_REQUEST,ALBUM_GET_SUCCESS,ALBUM_GET_FAIL,SET_ALBUM_NAME,SET_ALBUM_NAME_FAIL } from '../constants/albumsCostants'

export const albumReducer=(state={albums:[]},action)=>{
    switch(action.type){
        case ALBUM_GET_REQUEST:
            return {
                loading:true,
            }
        case ALBUM_GET_SUCCESS:
            return {
                loading:false,
                albums:action.payload
            } 
        case ALBUM_GET_FAIL:
            return {
                loading:false,
                error:action.payload
            }       
        default:
            return state;
    }
}


export const setAlbumNameReducer=(state={albumName:""},action)=>{
    switch(action.type){
        case SET_ALBUM_NAME:
            return {
                loading:false,
                albums:action.payload
            }  
        default:
            return state;
    }
}




