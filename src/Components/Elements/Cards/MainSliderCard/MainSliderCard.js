



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ItemMeta } from '../../UserMeta/ItemMeta';
import {Ux} from '../../HOC';
import './MainSliderCard.css';
import { GradientButton } from '../../../UI';


export const MainSliderCard=()=>{


    return(
        <Ux>
        <div className='overlay'></div>
                <picture>
                    <source type="image/avif" srcset={require('../../../../assets/avif/content/slider/slider-img-3.avif')}/>
                    <img src={require('../../../../assets/Images/content/slider/slider-img-3.png')} alt='SliderImg'/>
                </picture>
                <div className='slide-content'>
                    <div className='item-info'>
                        <ItemMeta title='DexterStark' />
                        <div className="title slide-title">Lost in Illustration</div>
                        <div className="item-bid-section">
                            <div className="bid-item">
                                <div className="label">Current bid</div>
                                <div className="value">2.31 ETH</div>
                            </div>
                            
                            <GradientButton background="purple" onClick={()=>{console.log('Item Press')}}>Go to Items</GradientButton>
                        </div>
                    </div>
                </div>
        </Ux>
    );
}