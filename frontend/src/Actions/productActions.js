import axios from 'axios'

export const getAllUnsoldItems=()=>async(dispatch)=>{
    try {
  
        dispatch({
            type:"allProductsRequest"
        })
    
        const {data}=await axios.get(`/api/allItems`)
        
        dispatch({
            type:"allProductsSuccess",
            payload:data.allUnsoldItems,
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type:"allProductsFailure",
            payload: error.response.data.message,
        })
    }
}

export const postItem=(title,price,description,image,location)=>async(dispatch)=>{
    try {
        dispatch({
          type: "postProductRequest",
        });
    
        const { data } = await axios.post(
          `/api/postItem`,
          {
            title,
            price,
            description,
            image,
            location
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({
          type: "postProducttSuccess",
          payload: data.message,
        });
      } catch (error) {
        dispatch({
          type: "postProductFailure",
          payload: error.response.data.message,
    
        })
        
      }
}

export const getItem=(id)=>async(dispatch)=>{
  try {
  
    dispatch({
        type:"getItemRequest"
    })

    const {data}=await axios.get(`/api/item/${id}`)
    
    dispatch({
        type:"getItemSuccess",
        payload:data.item,
    })
    
} catch (error) {

    dispatch({
        type:"getItemFailure",
        payload: error.response.data.message,
    })
}
}

export const purchaseItem=(id)=>async(dispatch)=>{
  try {
  
    dispatch({
        type:"purchaseProductRequest"
    })

    const {data}=await axios.get(`/api/item/buy/${id}`)
    
    dispatch({
        type:"purchaseProductSuccess",
        payload:data.item,
    })
    
} catch (error) {

    dispatch({
        type:"purchaseProductFailure",
        payload: error.response.data.message,
    })
}
}