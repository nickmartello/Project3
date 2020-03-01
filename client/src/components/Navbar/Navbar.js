import React, { Component } from 'react';
import "./Navbar.css"
import { BrowserRouter as Link} from "react-router-dom";


class Navbar extends Component {
    state = { 
        dash: "active",
        sched: "inactive",
        activeComponent: "/"
     }

     dashClick = () =>{
         this.setState({dash: "active", sched: "inactive", activeComponent: "/"})
     }
     schedClick = () =>{
        this.setState({dash: "inactive", sched: "active", activeComponent: "/schedule"})
    }

    render() { 
        return (
            <div className="navContainer">
                <ul className="navUL">
                    <li className="navLeft">
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li onClick={this.dashClick} className={this.state.dash}>
                    Dashboard
                    </li>
                    <li onClick={this.schedClick} className={this.state.sched}>
                    Schedule
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Navbar;