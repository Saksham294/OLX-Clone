import {configureStore} from '@reduxjs/toolkit' 
import { userReducer } from './Reducers/userReducer';
import {allProductsReducer, productOperationsReducer} from './Reducers/productReducer'

const initialState={}

const store=configureStore(
    {

        reducer:{
            user:userReducer,
            allUnsoldProducts:allProductsReducer,
            productOperations:productOperationsReducer,
        }
    })
    
 export default store;