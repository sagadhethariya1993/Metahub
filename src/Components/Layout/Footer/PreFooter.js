import './Footer.css'




export const PreFooter=({className=''})=>{
const items =[1,2,3,4,5,6,7,8];


    return(
    <div className={`before-footer-block ${className}`}>
        {
            items.map((i)=>(
            <div key={i+'before-footer-image'} className="before-footer-image">
                <img src={require("../../../assets/Images/content/before-footer/before-footer-img1.png")} height="240" width="240" alt="" loading="lazy"/>
            </div>
        ))
            
        }
    </div>
    );
}