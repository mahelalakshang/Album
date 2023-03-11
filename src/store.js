import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {albumReducer,setAlbumNameReducer} from './reducers/albumsReducer'
import {imagesReducer} from './reducers/imagesReducer'

const reducer=combineReducers({
    albumReducer,
    imagesReducer,
    setAlbumNameReducer
})

let initialState={}

const middlware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store





