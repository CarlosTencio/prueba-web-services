import React from "react";

const Card = ({ url, title, date }) => {
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

// const Carousel = ({ cards }) => {
//     return (
//         <div className="carousel-container">
//             <div className="carousel">
//                 {cards.map((card, index) => (
//                     <Card key={index} url={card.url} title={card.title} date={card.date} />
//                 ))}
//             </div>
//         </div>
//     );
// };


export default Card;