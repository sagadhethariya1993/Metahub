import {SectionPadding,Grids, Ux} from '../Components/Elements/HOC'
import {SectionHeading} from '../Components/UI'
import { ProductCard } from '../Components/Elements/Cards';
import { ProductCardV2, ProductCardV3 } from '../Components/Elements/Cards/ProductCard';
import { ProductCardV4 } from '../Components/Elements/Cards/ProductCard/V4/ProductCardV4';
import { PreFooter } from '../Components/Layout';





export const ItemVersions=()=>{
    const items = [1,2,3,4,5,6,7,8];



    return(
        <Ux>
        <div className="primary-content-area container content-padding">
            <SectionPadding>
                <SectionHeading text='Item' gradientText='Version 01' reverse/>
                <Grids col={4}>
                {
                    items.map((i)=>(
                        <ProductCard key={i+'ItemsV1'}/>
                    ))
                }
                </Grids>
            </SectionPadding>
            <SectionPadding>
                <SectionHeading text='Item' gradientText='Version 02' reverse/>
                <Grids col={6}>
                {
                    items.map((i)=>(
                        <ProductCardV2 key={i+'ItemsV2'}/>
                    ))
                }
                </Grids>
            </SectionPadding>
            <SectionPadding>
                <SectionHeading text='Item' gradientText='Version 03' reverse/>
                <Grids col={4}>
                {
                    items.map((i)=>(
                        <ProductCardV3 key={i+'ItemsV3'}/>
                    ))
                }
                </Grids>
            </SectionPadding>

            <SectionPadding>
                <SectionHeading text='Item' gradientText='Version 04' reverse/>
                <Grids col={4}>
                {
                    items.map((i)=>(
                        <ProductCardV4 key={i+'ItemsV4'}/>
                    ))
                }
                </Grids>
            </SectionPadding>
            
        </div>
        <PreFooter/>
        </Ux>
    );
}