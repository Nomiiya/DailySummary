import SignUpForm from '../../components/SignupPage/signupform'
import Link from "next/link"

const SignUpPage = () => {
    return(
        <div className="signup-wrapper">
            <Link href="/">Home</Link>
            <SignUpForm/>
        </div>
    );
}

export default SignUpPage;