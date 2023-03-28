import Image from 'next/image'
import ProfileButtons from './profilebuttons'

import { selectAuthState, setAuthState } from '@/store/authSlice'
import { useSelector } from 'react-redux'
import { supabase } from '@/lib/supabaseClient'

let Userprofile = () => {
    const authState = useSelector(selectAuthState);
    
    if(!authState){
        return(
            <div className='profile-wrapper'>
                <div className='profile-header'>
                    <Image 
                    className="profile-image"
                    width={75}
                    height={75} 
                    src='https://mhxmexdtagjbmquxeusj.supabase.co/storage/v1/object/sign/images/Generic-Profile-Image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvR2VuZXJpYy1Qcm9maWxlLUltYWdlLnBuZyIsImlhdCI6MTY3OTExODUwNCwiZXhwIjoxNzEwNjU0NTA0fQ.mBHLkd48U7Aoejwg1s53G_nRdFrp65sgWiNC7MPcg6U&t=2023-03-18T05%3A48%3A24.721Z'
                    alt=''/>
                    <ProfileButtons />
                </div>
            </div>
        );
    }
    else{
        async function getUserInformation() {
            const { data: { user } } = await supabase.auth.getUser();
        }

        return(
            <div className='profile-wrapper'>
                <div className='profile-header'>
                    <Image 
                    className="profile-image"
                    width={75}
                    height={75} 
                    src='https://mhxmexdtagjbmquxeusj.supabase.co/storage/v1/object/sign/images/Generic-Profile-Image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvR2VuZXJpYy1Qcm9maWxlLUltYWdlLnBuZyIsImlhdCI6MTY3OTExODUwNCwiZXhwIjoxNzEwNjU0NTA0fQ.mBHLkd48U7Aoejwg1s53G_nRdFrp65sgWiNC7MPcg6U&t=2023-03-18T05%3A48%3A24.721Z'
                    alt=''/> 
                    <div>{}</div>
                </div>
            </div>
        );
    }
    
}

export default Userprofile;