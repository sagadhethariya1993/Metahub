
import './Logo.css'


export const Logo=()=>{



    return(
        <div className="logo ">
            <a className="logo-link" href="01-index.html">
                <div className="logo-img"><img src={require('../../../assets/Images/logo.png')} alt="logo"/></div>
                <div className="logo-text">Cryptoki</div>
            </a>
        </div>
    );
}