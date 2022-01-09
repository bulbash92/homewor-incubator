import axios from "axios";



export const requestApi = {
    postReq(value: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value},)
            .then(res => res.data)
    }
}