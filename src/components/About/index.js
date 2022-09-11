import React from 'react';
import headShot from '../../assets/Julianheadphones.jpg';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} style={{ width: "20%" }} alt="man holding microphone" />
            <p>My name is Julian Heaney. I have many passions. I enjoy audio editing for things like podcasts. I'm really in to playing Dungeons and Dragons with my friends and family. And I love learning new things. This is why I have started this bootcamp. And my hope is that I continue to learn and grow in coding, through the end of bootcamp and beyond.
            </p>
        </section>
    );
}

export default About;