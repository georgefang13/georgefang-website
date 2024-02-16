import React from 'react';
import myImg from '../images/swaggerduck.png'

const About = () => {

    return (
        <div>
            <img src={myImg} alt={'George Fang'} />
            <h1>About Us</h1>
            <p>This is a simple about page.</p>
        </div>
    );
}

export default About;
