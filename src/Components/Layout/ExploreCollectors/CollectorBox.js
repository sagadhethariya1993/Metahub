

import { CollectorsBoxCard } from '../../Elements/Cards';
import './CollectorBox.css'



export const CollectorBox=()=>{



    return(
        <div className='collectors-box'>
            <table className='content-table'>
                <thead>
                    <tr>
                        <th scope="col" className="heading-label">Collector</th>
                        <th scope="col" className="heading-label">Items Collected</th>
                        <th scope="col" className="heading-label">Items Owned</th>
                        <th scope="col" className="heading-label">AVG PURCHASE PRICE</th>
                        <th scope="col" className="heading-label">Total purchased</th>
                        <th scope="col" className="heading-label">Top purchase</th>
                        <th scope="col" className="heading-label">Item resold</th>
                        <th scope="col" className="heading-label">Avg.resell price</th>
                        <th scope="col" className="heading-label">Total resold</th>
                    </tr>
                </thead>
                <tbody>
                    <CollectorsBoxCard/>
                    <CollectorsBoxCard/>
                    <CollectorsBoxCard/>
                    <CollectorsBoxCard/>
                    <CollectorsBoxCard/>
                </tbody>
            </table>
        </div>
    );
}