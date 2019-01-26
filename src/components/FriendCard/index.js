import React from "react";
import "./style.css"
//need props to use image names
const FriendCard = props => (
    <div onClick={props.imageClick}>
    <div style = {{height: 200, width: 200 }} className="w3-container w3-padding w3-left w3-red">
        <img style={{height: 150, width:150}} alt={props.image} src={require("../../images/" + props.image)}/>
    </div>

    </div>
);

export default FriendCard;