import LoginForm from '../components/loginform';
import Link from 'next/link';

const Login = () =>{
    return(
        <div className='login-form-wrapper'>
            <Link href='/'>Home</Link>
            <LoginForm />
        </div>
    );
}

export default Login;