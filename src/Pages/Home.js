
import {Ux} from '../Components/Elements/HOC';
import { MainSlider } from '../Components/Elements/Sliders/MainSlider';
import { FeaturedCreators,FeaturedItems , NewestItems, TopCreators,LatestNews } from '../Components/Layout/index';
import { PreFooter } from '../Components/Layout';


export const Home = () => {
   
    return(
        <Ux>
            <MainSlider/>
            <FeaturedItems/>
            <TopCreators/>
            <NewestItems/>
            <FeaturedCreators/>
            <LatestNews/>
            
            <PreFooter/>
        </Ux>
    );
}
