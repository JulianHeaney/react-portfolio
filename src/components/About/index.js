import React from 'react';
import headShot from '../../assets/Julianheadphones.jpg';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} style={{ width: "20%" }} alt="man holding microphone" />
            <p>Lorem ipsum
            </p>
        </section>
    );
}

export default About;