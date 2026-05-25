import {setLoading, setUser} from "../state/auth.slice";
import {getMe, login, register} from "../service/auth.api"
import { useDispatch } from "react-redux";

export const useAuth = ()=>{
    const dispatch = useDispatch()
    async function handleRegister({email,password,fullname,contact , isSeller=false}) {
        const data = await register({email , password,fullname,contact,isSeller})

        dispatch(setUser(data.user))
    }

    async function handleLogin({email,password}) {
        const data = await login({email,password})
        dispatch(setUser(data.user))
    }


    async function handleGetme() {
        try {
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user))
            
        } catch (error) {
            console.log(error);
        }finally{
            dispatch( setLoading(false) )
        }
    }




    return { handleRegister, handleLogin , handleGetme }
}
