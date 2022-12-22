import { createReducer} from "@reduxjs/toolkit";

const initialState={}



export const allProductsReducer=createReducer(initialState,{
    allProductsRequest:(state)=>{
      state.loading=true;
  },
  allProductsSuccess:(state,action)=>{
      state.loading=false;
      state.posts=action.payload;
  
  },
  allProductsFailure:(state,action)=>{
      state.loading=false
      state.error=action.payload;
  },
  })