import axios from 'axios'


export const registerUser = (name, email, password,avatar) => async (dispatch) => {
  try {
    dispatch({
      type: "registerUserRequest",
    });

    const { data } = await axios.post(
      "/api/register",
      { name, email, password,avatar },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "registerUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "registeUserrFailure",
      payload: error.response.data.message,
    });
  }
};
export const loginUser=(email,password)=>async (dispatch )=>{
    try {

        dispatch({
            type:"loginRequest"
        })

        const {data}=await axios.post("/api/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        dispatch({
            type:"loginSuccess",
            payload:data.user,
        })
        
    } catch (error) {

        dispatch({
            type:"loginFailure",
            payload: error.response.data.message,
        })
    }
}
export const logoutUser=()=>async(dispatch)=>{
    try {
        dispatch({
          type: "logoutUserRequest",
        });
    
        await axios.get("/api/logout");
    
        dispatch({
          type: "logoutUserSuccess",
  
        });
      } catch (error) {
        dispatch({
          type: "logoutUserFailure",
          payload: error.response.data.message,
        });
      }
}
