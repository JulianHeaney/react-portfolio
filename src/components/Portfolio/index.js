import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Awkward Party Pal',
            appUrl: 'https://abbygraves.github.io/awkward-party-pal/',
            repoUrl: 'https://github.com/JulianHeaney/awkward-party-pal',
            asset: 'awkward-party-pal.png'
        },
        {
            name: 'Note Taker',
            appUrl: 'https://peaceful-brushlands-07734.herokuapp.com//',
            repoUrl: 'https://github.com/JulianHeaney/note-taker',
            asset: 'note-taker.png'
        },
        {
            name: 'Pick Up',
            appUrl: 'https://pick-up-event.herokuapp.com/',
            repoUrl: 'https://github.com/Fathpinder/pick-up',
            asset: 'pick-up-screenshot.png'
        },
        {
            name: 'Team Profile Generator',
            appUrl: 'https://drive.google.com/file/d/1JYC-roitBWfxU_q8oBoHI0MLP9X7Y0Bl/view',
            repoUrl: 'https://github.com/JulianHeaney/team-profile-generator',
            asset: 'team-profile-generator.png'
        },
        {
            name: 'Weather dashboard of Minneapolis forecast',
            appUrl: 'https://julianheaney.github.io/weather-dashboard/',
            repoUrl: 'https://github.com/JulianHeaney/weather-dashboard',
            asset: 'weather-dashboard.png'
        },
        {
            name: 'Work Day Scheduler',
            appUrl: 'https://julianheaney.github.io/work-day-scheduler/',
            repoUrl: 'https://github.com/JulianHeaney/work-day-scheduler',
            asset: 'work-day-scheduler.png'
        }
    ]);

    return (
        <section>
        <h1 id="portfolio">Portfolio</h1>
            <div>
                {projects.map((project, index) => (<Project project={project} key={"project"+index}/>))}
            </div>
        </section>
    )
};

export default Portfolio;