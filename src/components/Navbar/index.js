import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return(
            <div className="w3-myfont w3-black">
                <ul className="w3-ul w3-xlarge">
                    <li>How good is your memeory???</li>
                    <li> Streak: {this.props.score} </li>
                </ul>
            </div>
        );
    }

}
export default Navbar;