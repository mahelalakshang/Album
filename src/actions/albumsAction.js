import axios from 'axios'

import {ALBUM_GET_REQUEST, ALBUM_GET_SUCCESS, ALBUM_GET_FAIL, SET_ALBUM_NAME, SET_ALBUM_NAME_FAIL} from '../constants/albumsCostants'

export const getAlbums=()=>async(dispatch)=>{

    try{
        dispatch({type: ALBUM_GET_REQUEST})
        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/albums',config)
        const sortedData=data.slice(0, 16).sort(function(a, b) {
            return a.title.localeCompare(b.title)
        });
        dispatch({
            type: ALBUM_GET_SUCCESS,
            payload:sortedData
        
        })
    }
    catch(error){
        dispatch({
            type: ALBUM_GET_FAIL,
            payload:error.response.data.message
        })

    }

}

export const getAlbumsDesc=()=>async(dispatch)=>{

    try{
        dispatch({type: ALBUM_GET_REQUEST})
        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/albums',config)
        const sortedData=data.slice(0, 16).sort(function(a, b) {
            return b.title.localeCompare(a.title)
        });
        dispatch({
            type: ALBUM_GET_SUCCESS,
            payload:sortedData   
        })
    }
    catch(error){
        dispatch({
            type: ALBUM_GET_FAIL,
            payload:error.response.data.message
        })

    }

}


export const setAlbumName=(name)=>async(dispatch)=>{

    try{
        dispatch({
            type: SET_ALBUM_NAME,
            payload:name      
        })
    }
    catch(error){
        dispatch({
            type: SET_ALBUM_NAME_FAIL
        })

    }

}