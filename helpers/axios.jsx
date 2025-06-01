import axios from 'axios'

const rootApiEp = import.meta.env.VITE_ROOT_API +"/api/v1"

const getAccessJWT = () =>{
    return localStorage.getItem("accessJWT");
}

const apiProcessor = async ({method, url, data, headers}) =>{
try {
    const response =await axios({
        method,
        url, 
        data,
        headers
    });
    return response.data;
} catch (error) {
    return{
        status:"error", 
        message: error?.response?.data?.error || error.message
    }
}
}

// signUp user
export const postNewUser = (data) =>{
    const obj = {
        method:"post",
        url: rootApiEp + `/users`, 
        data,
    }
    return apiProcessor(obj);
}
// Login user
export const loginUser = (data) =>{
    const obj = {
        method:"post",
        url: rootApiEp + `/users/login`, 
        data,
    }
    return apiProcessor(obj);
}

//get user
export const getUser = () =>{
    const obj = {
        method:"get",
        url: rootApiEp + `/users`, 
        headers:{
            Authorization: getAccessJWT(),
        },
    }
    return apiProcessor(obj);
}

// ###transaction api
//post transaction 
export const postNewTransaction = (data)=>{
const obj={
    method:"post", 
    url: rootApiEp + `/transactions`, 
    data, 
    headers:{
        Authorization: getAccessJWT(),
    }
}
return apiProcessor(obj)
}

//fetch the transaction api data
export const fetchTransaction = ()=>{
const obj={
    method:"get", 
    url: rootApiEp + `/transactions`,  
    headers:{
        Authorization: getAccessJWT(),
    }
}
return apiProcessor(obj)
}

//delete the transactions
export const deleteTransactions = (data) =>{
    const obj = {
        method:"delete", 
        url: rootApiEp + `/transactions`, 
        data, 
        headers:{
            Authorization: getAccessJWT(),
        }
    }
    return apiProcessor(obj)
}