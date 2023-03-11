import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {getAlbums,getAlbumsDesc,setAlbumName} from '../actions/albumsAction'
import {Link} from 'react-router-dom'
import img1 from '../images/home.jpeg'
import Loader from '../layout/Loader'



const Albums = (props) => {

  const dispatch=useDispatch()
  const {loading,albums}=useSelector(state=>state.albumReducer)
  const [images,setImages]=useState([])



  useEffect(()=>{
     getAlbumDetails()

     fd()
  },[props.showAsc])

 const getAlbumDetails=async()=>{
     if(props.showAsc){
        await dispatch(getAlbums())
      } 
      else{
         await dispatch(getAlbumsDesc())
      }
  }


  const fd=async()=>{
    let url='https://jsonplaceholder.typicode.com/photos?'
    for(let i=0;i<16;i++){
      url=url+`albumId=${i+1}&`
    }
    try{ 
      let res= await axios.get(url)   
      let arr=[]
      let j=1
      for(let i=0;i<res.data.length;i++){  
        if(res.data[i].albumId==j){
          arr.push(res.data[i].url)
          j=j+1
        }    
      }
        
      if(props.showAsc){
        setImages(arr)
      }
      else{
        arr.reverse()
        setImages(arr)
      }    
    }
    catch(e){
    }    
  }

  return (
    <div className='row container-fluid'>
      {
   
        loading ?<div className='text-center'><Loader></Loader></div>:(
        albums && albums.map((data,i)=>{

          return(            
              <Link key={i} onClick={()=>dispatch(setAlbumName(data.title))} className='col-md-6 text-decoration-none text-primary mb-2' to={`/images/${data.id}`}> 
              <div className='card bg-light'>
                <div className='row  p-1'>
                  <div className='col'>   
                   { images && <img src={images[i]}  width="200px" className='col'></img> } 
                  </div>            
                   <p className='col text-dark'>{data.title}</p>
                </div>
                </div>
              </Link>       
          )
        })
        )
      }
    </div>
  )
}

export default Albums