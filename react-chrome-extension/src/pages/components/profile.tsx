import Image from 'next/image'


function Userprofile(){
    return(
        <div className='profile-wrapper'>
            <div className='profile-header'>
                <Image 
                className="image-sidenav"
                width={75}
                height={75} 
                src='https://mhxmexdtagjbmquxeusj.supabase.co/storage/v1/object/sign/images/Generic-Profile-Image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvR2VuZXJpYy1Qcm9maWxlLUltYWdlLnBuZyIsImlhdCI6MTY3OTExODUwNCwiZXhwIjoxNzEwNjU0NTA0fQ.mBHLkd48U7Aoejwg1s53G_nRdFrp65sgWiNC7MPcg6U&t=2023-03-18T05%3A48%3A24.721Z'
                alt=''/>
                <div className='profile-options'>
                    <p> Login </p>
                    <p> Sign Up </p>
                </div>
            </div>
        </div>
    );
}

export default Userprofile;