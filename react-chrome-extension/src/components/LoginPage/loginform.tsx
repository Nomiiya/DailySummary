import { useRouter } from "next/router";
import React,  {useState } from "react";

import  FormEventHook  from "@/hooks/formeventhook"
import { supabase } from "@/lib/supabaseClient";
import { setAuthState } from "@/store/authSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
    const initialState = {
        email:"",
        password: ""
    };

    const [userInfo, setUserInfo] = useState();
    const [sessionInfo, setSessionInfo] = useState();
    const [loginError, setLoginError] = useState();
    const router = useRouter();
    const dispatch = useDispatch();

    const {onChange, onSubmit, values} = FormEventHook(signupUserCallback, initialState);

    async function signupUserCallback(){
        const { data, error } = await supabase.auth.signInWithPassword  ({
            // @ts-ignore
            email: values.email,
            // @ts-ignore
            password: values.password
        })
        // @ts-ignore
        setUserInfo(data?.user);
        // @ts-ignore
        setSessionInfo(data?.session);
        // @ts-ignore
        setLoginError(error);
    };

    supabase.auth.onAuthStateChange((e) => {
        if (e == "SIGNED_IN"){
            dispatch(setAuthState(true));
            router.push("/");
        }
    })

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name= 'email'
                    id = 'email'
                    type='email'
                    placeholder="Email Address"
                    onChange={onChange}
                    required
                />
                <input
                    name= 'password'
                    id = 'password'
                    type='password'
                    placeholder="Password"
                    onChange={onChange}
                    required
                />
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

export default SignUp;