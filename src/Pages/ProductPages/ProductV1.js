



import { Ux } from '../../Components/Elements/HOC';
import {ProductInfoV1, ProductMedia} from '../../Components/Elements/ProductElements'
import { PreFooter } from '../../Components/Layout';
import './ProductPage.css'



export const ProductV1=()=>{


    return(
    <Ux>
        <div className="product-page product-version-1">
            <ProductMedia/>
            <ProductInfoV1/>
            
        </div>

        <PreFooter  className="no-top-padding"/>
    </Ux>
    );
}