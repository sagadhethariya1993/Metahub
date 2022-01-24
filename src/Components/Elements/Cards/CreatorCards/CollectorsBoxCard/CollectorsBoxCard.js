
import './CollectorsBoxCard.css'
import {Avatar42} from '../../../Avatars'


export const CollectorsBoxCard=()=>{



    return(
        <tr>
             <td data-label="Collector">
                <div className="collector-info avatar-block">
                  <Avatar42/>
                  <div className="avatar-meta">
                    <div className="avatar-title"><a href="08-profile-page.html">Jackie Jones</a></div>
                    <div className="avatar-meta">@JackieJ</div>
                  </div>
                </div>
              </td>
              <td data-label="Items Collected" className="stats-item">196</td>
              <td data-label="Items Owned" className="stats-item">32</td>
              <td data-label="AVG PURCHASE PRICE" className="stats-item">$4.530</td>
              <td data-label="Total purchased" className="stats-item">$230.580</td>
              <td data-label="Top purchase" className="stats-item">$26.000</td>
              <td data-label="Item resold" className="stats-item">47</td>
              <td data-label="Avg.resell price" className="stats-item">$1.693</td>
              <td data-label="Total resold" className="stats-item">$68.235</td>
        </tr>
    );
}