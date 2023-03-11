import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {getAscImages,getDescImages} from '../actions/imagesAction'
import {Link,useHistory} from 'react-router-dom'
import Loader from '../layout/Loader'

const Images = (props,{location}) => {
  const { id } = useParams();
  const dispatch=useDispatch()
  const {loading,images}=useSelector(state=>state.imagesReducer)
  const {albums}=useSelector(state=>state.setAlbumNameReducer)
  const history = useHistory();

  useEffect(()=>{
    if(!albums){
      history.push("/")
    }
    getimageDetails()
  },[props.showAsc])

  const getimageDetails=async()=>{
    if(props.showAsc){
       await dispatch(getAscImages(id))
     } 
     else{
        await dispatch(getDescImages(id))
     }
  }

  return (
    <div className='container-fluid'>
     <h4 className='mx-3'>Album Name : {albums}</h4>
     <div className='row text-center'>  
       {
        loading ? <div className='text-center'><Loader></Loader></div>:(
        images && images.map((data,i)=>{
          return(            
              <div key={i} className='col'>      
                <img src={data.url} width="200px" className='col mb-1'></img> 
              </div>        
          )
        })
        )
      }
     </div>
    </div>
  )
}

export default Images