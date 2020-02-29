import React, { Component } from 'react';
import "./Navbar.css"
import { BrowserRouter as Link} from "react-router-dom";


class Navbar extends Component {
    state = { 
        dash: "active",
        sched: "inactive"
     }

     dashClick = () =>{
         this.setState({dash: "active", sched: "inactive"})
     }
     schedClick = () =>{
        this.setState({dash: "inactive", sched: "active"})
    }

    render() { 
        return (
            <div className="navContainer">
                <ul className="navUL">
                    <li className="navLeft">
                        <Link to="settings">Settings</Link>
                    </li>
                    <li onClick={this.dashClick} className={this.state.dash}>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li onClick={this.schedClick} className={this.state.sched}>
                        <Link to="/schedule">Schedule</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Navbar;