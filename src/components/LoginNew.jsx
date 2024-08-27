import {useActionState} from "react";
import { loginUser } from "../api/user";
import SubmitButton from "./SubmitButton";

const LoginNew = () => {
    const [user, submitAction, isPending] = useActionState(login,{
        data: null,
        error: null
      }) ;
    
      async function login(prevState,formData){
        const userName = formData.get("userName");
        const password = formData.get("password");
    
        try{
            const response = await loginUser(userName, password);
            return {data: response.data, error: null}
        }
        catch(error){
            return {data: null, error: error.error}
        }
      }
      return (
        <form action={submitAction}>
          <div>
            <label htmlFor="userName">Username: </label>
            <input type="text" name="userName" id="userName" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
          </div>
          <SubmitButton />
          {user?.data && <p style={{color: 'green'}}>Logged in: {user.data.email}</p>}
          {user?.error && <p style={{color: 'red'}}>{user.error}</p>}
        </form>
      )
    }

export default LoginNew