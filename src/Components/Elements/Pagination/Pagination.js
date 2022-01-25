import { NavLink } from 'react-router-dom';
import './Pagination.css'



export const Pagination=({flex='center'})=>{



    return(
        <div className={`pagination-section flex-${flex}`}>
                    <ul className="pagination-list">
                        <li className="page-item page-nav-prev"><NavLink to="/">Prev</NavLink></li>
                        <li className="page-item"><NavLink to="/">01</NavLink></li>
                        <li className="page-item"><NavLink to="/">02</NavLink></li>
                        <li className="page-item"><NavLink to="/">03</NavLink></li>
                        <li className="page-item page-more-link"><NavLink to="/">...</NavLink></li>
                        <li className="page-item"><NavLink to="/">16</NavLink></li>
                        <li className="page-item page-nav-next"><NavLink to="/">Next</NavLink></li>
                    </ul>
                </div>
    );
}