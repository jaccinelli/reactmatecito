import axios from "axios";

let backend_url = "https://127.0.0.1:8000"



export const GET = async (url) => {
    
    let user_token = localStorage.getItem('userToken');
    let logged_in = user_token !== null && user_token !== undefined && user_token !== "";
    let heads_get;

    if(logged_in){
        heads_get = { 'Authorization': 'Token ' + user_token }
    }else{
        heads_get = {}
    }

    const response = await axios.get(backend_url + url,
        { headers: heads_get }
    )
    return response.data
}

export const POST = async (url, data) => {

    let user_token = localStorage.getItem('userToken');
    let logged_in = user_token !== null && user_token !== undefined && user_token !== "";
    let heads_post;

    if(logged_in){
        heads_post = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + user_token }
    }else{
        heads_post = { 'Content-Type': 'application/json' }
    }

    const response = await axios.post(
        backend_url + url, data,
        { headers: heads_post}
    )
    return response.data
}