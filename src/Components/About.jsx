import React from 'react';

const About = React.forwardRef((props, ref) => (
<div ref={ref} className='about h-screen bg-slate-900 snap-start p-6'>
    <div className='w-full h-full flex flex-col text-slate-400 space-y-10'>

        <div className=''>
            <h1 className='text-lg'>Hey! I am Om Jaiswal, a proud Jack of All Trades!
            This is everything about me:</h1>
        </div>

        <div className='flex flex-row'>
            <ul className='custom-ul'>
                <h1 className='glow text-lg '>Languages</h1>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
            </ul>

            <ul className='custom-ul'>
                <h1 className='glow text-lg'>Frameworks</h1>
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>React JS</li>
            </ul>

            <ul className='custom-ul'>
                <h1 className='glow text-lg'>Databases</h1>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLLite</li>
            </ul>

            <ul className='custom-ul'>
                <h1 className='glow text-lg'>Dev Ops</h1>
                <li>GitHub</li>
                <li>Dokcer</li>
                <li>AWS</li>
                <li>Kubernetes</li>
            </ul>

            <ul className='custom-ul'>
                <h1 className='glow text-lg'>Tools</h1>
                <li>Celery</li>
                <li>Selenium</li>
                <li>JWT</li>
            </ul>
        </div>


        <ul className='list-disc px-10 custom-ul'>
        <h1 className='text-lg'>Why hire me?</h1>
            <li>Problem Solver </li>: Solves the problem no matter what it takes
            <li>Ambitious</li>: Have the drive even if not the knowledge
            <li>Progressive</li>: Getting better day by day
            <li>Determined</li>: Bound to make a mark
        </ul>


        <ul className='list-disc px-10 custom-ul'>
        <h1 className='text-lg'>Achievements</h1>
            <li>Joint Secretary - EduMinerva (2023-24)</li>
            <li>Head of Department - Alumni Meet'24</li>
            <li>Provisional Patent - Smart Alert System for Seat Reservation in Metros</li>
        </ul>

    </div>
</div>
));

export default About;