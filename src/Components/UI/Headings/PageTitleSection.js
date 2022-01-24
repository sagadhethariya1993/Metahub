import './PageTitleSection.css'


export const PageTitleSection=({text, gradientText,reverse=false,explore,exploreOnPress})=>{
    const Heading =!reverse? 
    (<h2><span className="gradient-text">{gradientText} </span>{text}</h2>)
    :(<h2>{text} <span className="gradient-text"> {gradientText}</span></h2>);
    
    return(
        <div  className="page-title-section">
            {Heading}
        </div>
    );
}