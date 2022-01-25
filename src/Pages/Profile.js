import { Ux } from '../Components/Elements/HOC';
import { ProfileHeader } from '../Components/Elements/Profile/ProfileHeader'
import { MobProfileHeader } from '../Components/Elements/Profile/MobProfileHeader'
import { PreFooter } from '../Components/Layout';
import { SliderTabs } from '../Components/UI/Tabs/SliderTabs/SliderTabs';


export const Profile=()=>{


    return(
    <Ux>
        <div className="primary-content-area profile-page">
            <ProfileHeader/>
            <MobProfileHeader/>
            <div class="profile-page-container container">
                <SliderTabs/>
            </div>
            
        </div>
        <PreFooter/>
    </Ux>
    );
}