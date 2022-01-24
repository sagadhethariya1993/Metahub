import { Facebook, Heart, Instagram, Link, ThreeDots, Twitter } from 'react-bootstrap-icons';
import { Ux ,Grids} from '../../Components/Elements/HOC';
import {PreFooter} from '../../Components/Layout';
import { ProductMedia,ProductInfoV3, ProductMeta } from '../../Components/Elements/ProductElements';
import './ProductPage.css'
import { Bids ,ProductCard } from '../../Components/Elements/Cards';




export const ProductV3=()=>{



    return(
        <Ux>
            <div className="primary-content-area container content-padding">
                <div className="product-page product-version-3">
                    <div className="page-title-section">
                        <div className="social-share-box">
                            <div className="share-icons">
                            <a href="#">
                                <Link/>
                            </a>
                            <a href="#">
                                <Facebook/>
                            </a>
                            <a href="#">
                                <Twitter/>
                            </a>
                            <a href="">
                                <Instagram/>
                            </a>
                            </div>
                        </div>
                        <div className="product-title">
                            <h1>The Kobra Kings</h1>
                        </div>
                        <div className="favourite-section">
                            <div className="product-fav-counter"><Heart/><span className="count">105</span>
                            </div>
                            <div className="more-link"><a href="#">
                                <ThreeDots/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="product-main-info">
                        <ProductInfoV3/>
                        <ProductMedia/>
                        <ProductMeta/>
                    </div>

                    <div className="bids-listing-section">
                        <div className="bids-list">
                            <div className="small-title">Bids</div>
                            <Bids/>
                            <Bids/>
                            <Bids/>
                        </div>

                        <div className="bids-list">
                            <div className="small-title">Bids</div>
                            <Bids/>
                            <Bids/>
                            <Bids/>
                            <Bids/>
                        </div>
                    </div>
                    <div className="related-section container">
                <div className="section-title-wrapper">
                    <h3>Related Items</h3>
                </div>
                <div className="featured-box">
                    <Grids col={4}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </Grids>
                </div>
                </div>
                </div>
            </div>
        <PreFooter/>
        </Ux>
    );
}