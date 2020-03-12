import React from "react";

const PlanDetail = ({title, desc, start, end, dur}) => {

    let percOfDay = (num) => {
        return Math.floor((num * 100) / 24);
    }

    return (
        <div className="cardBody">
            <h1 className="header">{title}</h1>
            <h2 className="description">{desc}</h2>
            <h3 className="time">{start}-{end} ({percOfDay(dur)}% of your day)</h3>
            <button className="deleteBtn">Delete</button>
            <div className="insetBox"></div>
        </div>
    )
    
}

export default PlanDetail