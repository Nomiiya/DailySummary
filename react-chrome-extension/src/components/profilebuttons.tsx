import Link from "next/link"

const ProfileButtons = () => {
    return(
        <div className="ProfileButtons">
            <Link href='/signup'>
                <button>Sign Up</button>
            </Link>
            <Link href='/login'>
                <button>Login</button>
            </Link>
        </div>
    );
};

export default ProfileButtons;