import { createReducer} from "@reduxjs/toolkit";

const initialState={}



export const allProductsReducer=createReducer(initialState,{
    allProductsRequest:(state)=>{
      state.loading=true;
  },
  allProductsSuccess:(state,action)=>{
      state.loading=false;
      state.unsoldProducts=action.payload;
  
  },
  allProductsFailure:(state,action)=>{
      state.loading=false
      state.error=action.payload;
  },
  })

export const productOperationsReducer=createReducer(initialState,{
    postProductRequest: (state) => {
        state.loading = true;
      },
      postProductSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      postProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteProductRequest:(state, action) => {
        state.loading = true;

      },
      deleteProductSuccess:(state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteProductFailure:(state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      purchaseProductRequest:(state, action) => {
        state.loading = true;

      },
      purchaseProductSuccess:(state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      purchaseProductFailure:(state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      
})