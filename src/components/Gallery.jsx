import React from "react";
import Card from "./Card";


const Gallery = ({imgs =[]}) => {
    return (

        <div className="gallery-container">
            {imgs.map((img) => (
                <Card
                key={Date.now() + Math.random() * 1000}
                    url={img.url}
                    title={img.title}
                    date={img.date} />
            ))}


        </div>

    );
};

export default Gallery;

