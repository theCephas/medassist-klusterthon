import useQueryMutation from "../../lib/useQueryMutation"
import { api, makePostRequest } from "../api"

export const useUserLogin = () => {
return useQueryMutation({
        mutationFn : (data)=> makePostRequest(data, api.users.login)
    })
}

export const useRegister =()=>{
    return useQueryMutation({
        mutationFn:(data)=> makePostRequest(data, api.users.register)
    })
}