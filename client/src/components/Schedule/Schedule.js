import React, {Component} from 'react'
import './Schedule.css'
class Schedule extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="table calendar">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                        <td className="weekDay"></td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default Schedule;