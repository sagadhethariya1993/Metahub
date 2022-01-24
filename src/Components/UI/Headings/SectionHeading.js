import './SectionHeading.css'


export const SectionHeading=({text, gradientText,reverse=false,explore,exploreOnPress})=>{
    const Heading =!reverse? 
    (<div className="section-title"><span className="gradient-text">{gradientText} </span>{text}</div>)
    :(<div className="section-title">{text} <span className="gradient-text">{gradientText}</span></div>);
    const ex = explore?(<div  onClick={()=>{exploreOnPress()}} className="all-items-link"><a>{explore}</a></div>):null;
    return(
        <div className="section-title-wrapper">
            {Heading}
            {ex}
        </div>
    );
}