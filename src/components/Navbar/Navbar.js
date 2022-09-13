import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <ul className="nav nav-pills nav-justified">
        <div>
            <li>Dog Clicky Game</li>
            <li className={props.message.indexOf('incorrectly') !== -1 ?
                    'desc-incorrect' : props.message.indexOf('correctly') !== -1 ? 'desc-correct' : 'desc-normal'}>
                {props.message}  
            </li>
        </div>
        <li>Score: <span style={{ color: "blue" }}>{props.curScore}</span> | Top Score: {props.topScore}</li>
    </ul>
);

export default Navbar;