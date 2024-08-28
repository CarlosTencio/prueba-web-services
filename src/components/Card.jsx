import React from "react";

const  Card =({ url, title, date }) => {

    return (
        <div className="img">
            <img src={url} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Card;