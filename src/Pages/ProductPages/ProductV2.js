import {ProductInfoV2, ProductMedia} from '../../Components/Elements/ProductElements'
import './ProductPage.css'

import { ProductCardV2 } from '../../Components/Elements/Cards';
import { Grids, Ux } from '../../Components/Elements/HOC';
import { PreFooter } from '../../Components/Layout';



export const ProductV2=()=>{


    return(
        <Ux>
        <div className="product-page product-version-2">
            <ProductMedia/>
            <ProductInfoV2/>
            <div className="related-section container">
                <div className="section-title-wrapper">
                    <h3>Related Items</h3>
                </div>
                <div className="featured-box">
                    <Grids col={6}>
                        <ProductCardV2/>
                        <ProductCardV2/>
                        <ProductCardV2/>
                        <ProductCardV2/>
                        <ProductCardV2/>
                    </Grids>
                </div>
                </div>
        </div>
        <PreFooter/>
        </Ux>
    );
}