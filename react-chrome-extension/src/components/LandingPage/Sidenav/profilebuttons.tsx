import Link from "next/link"

const ProfileButtons = () => {
    return(
        <div className="ProfileButtons">
            <Link href='/UserActions/signup'>
                <button>Sign Up</button>
            </Link>
            <Link href='/UserActions/login'>
                <button>Login</button>
            </Link>
        </div>
    );
};

export default ProfileButtons;