import React,  {useState } from "react";
import  FormEventHook  from "../../hooks/formeventhook"
import { supabase } from "../../lib/supabaseClient";

const SignUp = () => {
    const initialState = {
        email:"",
        password: "",
        displayName: ""
    };

    const {onChange, onSubmit, values} = FormEventHook(signupUserCallback, initialState);

    async function signupUserCallback(){
        const { data, error } = await supabase.auth.signUp({
            // @ts-ignore
            email: values.email,
            // @ts-ignore
            password: values.password
        })
    };

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
                <input
                    name= 'displayName'
                    id = 'displayName'
                    type='displayName'
                    placeholder="Display Name"
                    onChange={onChange}
                    required
                />
                <button type='submit'>Signup</button>
            </div>
        </form>
    )
}

export default SignUp;