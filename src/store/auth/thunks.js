import Swal from "sweetalert2";
import { fetchCredentials } from "../../helpers/data-fetch"
import { authDoneChecking, authLogin, authStartChecking } from "./authSlice";



export const startLogin = ( email, password )=>{

    return async( dispatch )=>{

        try {
            
            dispatch(authStartChecking());
            const resp = await fetchCredentials(email, password);

            dispatch(authLogin(resp.user));
            
        } catch (error) {
            Swal.fire( 'Error', error.msg, 'error' )
            dispatch(authDoneChecking())
        }


    }

}