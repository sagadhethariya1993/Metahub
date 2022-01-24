
import './Pagination.css'



export const Pagination=({flex='center'})=>{



    return(
        <div className={`pagination-section flex-${flex}`}>
                    <ul className="pagination-list">
                        <li className="page-item page-nav-prev"><a href="#">Prev</a></li>
                        <li className="page-item"><a href="#">01</a></li>
                        <li className="page-item"><a href="#">02</a></li>
                        <li className="page-item"><a href="#">03</a></li>
                        <li className="page-item page-more-link"><a href="#">...</a></li>
                        <li className="page-item"><a href="#">16</a></li>
                        <li className="page-item page-nav-next"><a href="#">Next</a></li>
                    </ul>
                </div>
    );
}