import './CalenderWidget.css'
import { NavLink } from 'react-router-dom';



export const CalenderWidget=()=>{

    return(
        <div className="widget-2 calendar-widget">
              <div className="widget-title h5">Calendar</div>
              <div className="widget-body">
                <table className="calendar-table">
                  <caption>August 2021</caption>
                  <thead>
                    <tr>
                      <th>sun</th>
                      <th>mon</th>
                      <th>tue</th>
                      <th>wed</th>
                      <th>thu</th>
                      <th>fri</th>
                      <th>sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><NavLink to="!#">1</NavLink></td>
                      <td><NavLink to="!#">2</NavLink></td>
                      <td><NavLink to="!#">3</NavLink></td>
                      <td><NavLink to="!#">4</NavLink></td>
                      <td><NavLink to="!#">5</NavLink></td>
                      <td><NavLink to="!#">6</NavLink></td>
                      <td><NavLink to="!#">7</NavLink></td>
                    </tr>
                    <tr>
                      <td><NavLink to="!#">8</NavLink></td>
                      <td><NavLink to="!#">9</NavLink></td>
                      <td><NavLink to="!#">10</NavLink></td>
                      <td><NavLink to="!#">11</NavLink></td>
                      <td><NavLink to="!#">12</NavLink></td>
                      <td><NavLink to="!#">13</NavLink></td>
                      <td><NavLink to="!#">14</NavLink></td>
                    </tr>
                    <tr>
                      <td><NavLink to="!#">15</NavLink></td>
                      <td><NavLink to="!#">16</NavLink></td>
                      <td><NavLink to="!#">17</NavLink></td>
                      <td><NavLink to="!#">18</NavLink></td>
                      <td><NavLink to="!#">19</NavLink></td>
                      <td><NavLink to="!#">20</NavLink></td>
                      <td><NavLink to="!#">21</NavLink></td>
                    </tr>
                    <tr>
                      <td><NavLink to="!#">22</NavLink></td>
                      <td><NavLink to="!#">23</NavLink></td>
                      <td><NavLink to="!#">24</NavLink></td>
                      <td><NavLink to="!#">25</NavLink></td>
                      <td><NavLink to="!#">26</NavLink></td>
                      <td><NavLink to="!#">27</NavLink></td>
                      <td><NavLink to="!#">28</NavLink></td>
                    </tr>
                    <tr>
                      <td><NavLink to="!#">29</NavLink></td>
                      <td><NavLink to="!#">30</NavLink></td>
                      <td><NavLink to="!#">31</NavLink></td>
                      <td className="inactive"><NavLink to="!#">1</NavLink></td>
                      <td className="inactive"><NavLink to="!#">2</NavLink></td>
                      <td className="inactive"><NavLink to="!#">3</NavLink></td>
                      <td className="inactive"><NavLink to="!#">4</NavLink></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    );
}