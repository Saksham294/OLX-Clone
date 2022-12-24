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

export const postItem=(title,price,description)=>async(dispatch)=>{
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