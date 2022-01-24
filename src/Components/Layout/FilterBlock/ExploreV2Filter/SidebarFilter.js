import './SidebarFilter.css'



export const SidebarFilter=()=>{


    return(
        <form className="cryptoki-form" id="filter-form">
                    <div className="form-group">
                        <div className="small-title">Categories</div>
                        <div className="is-two-col-element">
                            <div className="form-list-wrapper">
                                <div className="form-list-elem">
                                    <input type="checkbox" name="all-items" id="all-items" className="cryptoki-checkbox"/>
                                    <label htmlFor="all-items">All Items</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="featured" id="featured" className="cryptoki-checkbox"/>
                                    <label htmlFor="featured">Featured</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="3d-artwork" id="3d-artwork" className="cryptoki-checkbox"/>
                                    <label htmlFor="3d-artwork">3D Artwork</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="illustrations" id="illustrations" className="cryptoki-checkbox"/>
                                    <label htmlFor="illustrations">Illustrations</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="gaming" id="gaming" className="cryptoki-checkbox"/>
                                    <label htmlFor="gaming">Gaming</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="photography" id="photography" className="cryptoki-checkbox"/>
                                    <label htmlFor="photography">Photography</label>
                                </div>
                            </div>
                            <div className="form-list-wrapper">
                                <div className="form-list-elem">
                                    <input type="checkbox" name="motion-graphics" id="motion-graphics" className="cryptoki-checkbox"/>
                                    <label htmlFor="motion-graphics">Motion Graphics</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="pop-culture" id="pop-culture" className="cryptoki-checkbox"/>
                                    <label htmlFor="pop-culture">Pop Culture</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="memes" id="memes" className="cryptoki-checkbox"/>
                                    <label htmlFor="memes">Memes</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="nsfw" id="nsfw" className="cryptoki-checkbox"/>
                                    <label htmlFor="nsfw">NSFW</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="looping-artwork" id="looping-artwork" className="cryptoki-checkbox"/>
                                    <label htmlFor="looping-artwork">Looping Artwork</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="small-title">Order By</div>
                        <div className="form-list-elem">
                            <input type="radio" name="order-by" id="newest" className="cryptoki-radio"/>
                            <label htmlFor="newest">Newest</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="order-by" id="oldest" className="cryptoki-radio"/>
                            <label htmlFor="oldest">Oldest</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="order-by" id="trending" className="cryptoki-radio"/>
                            <label htmlFor="trending">Trending</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="small-title">Type</div>
                        <div className="form-list-elem">
                            <input type="radio" name="type" id="all-artwork" className="cryptoki-radio"/>
                            <label htmlFor="all-artwork">All Artwork</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="type" id="auctions-only" className="cryptoki-radio"/>
                            <label htmlFor="auctions-only">Auctions Only</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="type" id="buy-now" className="cryptoki-radio"/>
                            <label htmlFor="buy-now">Buy Now</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="small-title">Creators</div>
                        <div className="form-list-elem">
                            <input type="radio" name="creator-type" id="all-creators" className="cryptoki-radio"/>
                            <label htmlFor="all-creators">All Creators</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="creator-type" id="verified-only" className="cryptoki-radio"/>
                            <label htmlFor="verified-only">Verified Only</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="small-title">Ending</div>
                        <div className="form-list-elem">
                            <input type="radio" name="ending" id="anytime" className="cryptoki-radio"/>
                            <label htmlFor="anytime">Anytime</label>
                        </div>
                        <div className="form-list-elem">
                            <input type="radio" name="ending" id="soon" className="cryptoki-radio"/>
                            <label htmlFor="soon">Soon</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <select className="select-nice" style={{display:'none'}}>
                            <option value="">$ United States Dollars</option>
                            <option value="">€ European Euro</option>
                            <option value="">£ Great Britain Pound</option>
                        </select><div className="nice-select select-nice  " tabIndex="0">
                            <span className="current">Select an option</span>
                            <div className="nice-select-dropdown">
                            
                            <ul className="list"><li data-value="" className="option null">$ United States Dollars</li><li data-value="" className="option null">€ European Euro</li><li data-value="" className="option null">£ Great Britain Pound</li></ul>
                            </div></div>

                                <div className="price-range">
                                    <input type="number" placeholder="From"/>
                                    <input type="number" placeholder="To"/>
                                </div>
                            </div>
                            <input type="submit" value="Apply Filters"/>
                            <input type="reset" value="Reset Filters"/>
                        </form>
    );
}