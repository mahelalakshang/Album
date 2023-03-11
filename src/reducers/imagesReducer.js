import {IMAGES_GET_REQUEST,IMAGES_GET_SUCCESS,IMAGES_GET_FAIL} from '../constants/imagesConstant'

export const imagesReducer=(state={images:[]},action)=>{
    switch(action.type){
        case IMAGES_GET_REQUEST:
            return {
                loading:true,
            }
        case IMAGES_GET_SUCCESS:
            return {
                loading:false,
                images:action.payload
            } 
        case IMAGES_GET_FAIL:
            return {
                loading:false,
                error:action.payload
            }       
        default:
            return state;
    }
}