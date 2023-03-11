import axios from 'axios'

import {IMAGES_GET_REQUEST,IMAGES_GET_SUCCESS,IMAGES_GET_FAIL} from '../constants/imagesConstant'

export const getAscImages=(id)=>async(dispatch)=>{

    try{
        dispatch({type: IMAGES_GET_REQUEST})
        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`,config)

        const sortedData=data.slice(0, 16).sort(function(a, b) {
            return a.title.localeCompare(b.title)
        });

        dispatch({
            type: IMAGES_GET_SUCCESS,
            payload:sortedData
        })

    }
    catch(error){
        dispatch({
            type: IMAGES_GET_FAIL,
            payload:error.response.data.message
        })

    }

}


export const getDescImages=(id)=>async(dispatch)=>{

    try{
        dispatch({type: IMAGES_GET_REQUEST})
        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/photos?userId=${id}`,config)

        const sortedData=data.slice(0, 16).sort(function(a, b) {
            return b.title.localeCompare(a.title)
        });

        dispatch({
            type: IMAGES_GET_SUCCESS,
            payload:sortedData
        })

    }
    catch(error){
        dispatch({
            type: IMAGES_GET_FAIL,
            payload:error.response.data.message
        })

    }

}



