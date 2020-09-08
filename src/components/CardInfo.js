// This file sets the info for the Carousel cards, and exports it to Card.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Github Repository</a>
            <br></br>
            <a href={props.link2} target="_blank" rel="noopener noreferrer">View Deployed Application</a>
        </animated.div>
    );

}

export default CardInfo;