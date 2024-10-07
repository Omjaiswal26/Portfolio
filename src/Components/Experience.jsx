// Experience.jsx
import React from 'react';

const Experience = React.forwardRef((props, ref) => (
  <div ref={ref} className='experience h-auto bg-slate-900 snap-start flex flex-col space-y-4 overflow-y-auto px-8 py-6'>
    <div className='w-full h-50 flex flex-row group hover:border-white hover:shadow-2xl hover:bg-slate-800 rounded-md'>
        <div className='w-1/5 h-full p-2'><h1 className='font-medium text-gray-400'>June 2024 - Aug 2024</h1></div>
        <div className='w-4/5 h-full flex flex-col space-y-4 px-6 py-2'>
          <div>
            <h1 className='text-base text-white font-medium text-lg group-hover:text-teal-400'>Django Trainee · Medius AI</h1>
            <ol className='list-disc text-slate-400'>
            <li>Independently developed  40+ different Production APIs for an entirely new application using Django REST Framework and all types of APIView, Generic APIView and ModelViewsets.</li>
            <li>Optimised existing APIs by over 40% using Celery and Redis. Authenticated 100+ APIs using JWTAuthentication.</li>
            <li>Utilized GitHub commands extensively for version control, improving deployment efficiency and consistency.</li>
            <li>Managed and optimized PostgreSQL databases, ensuring high performance and reliability.</li>
            </ol>
          </div>
          <div className='w-full flex flex-row h-auto space-x-4'>
            <div className='custom-button'>Python</div>
            <div className='custom-button'>Django</div>
            <div className='custom-button'>DRF</div>
            <div className='custom-button'>Celery</div>
            <div className='custom-button'>PostgreSQL</div>
          </div>
        </div>
    </div>
    <div className='w-full h-50 flex flex-row group hover:border-white hover:shadow-2xl hover:bg-slate-800 rounded-md'>
        <div className='w-1/5 h-full p-2'><h1 className='font-medium text-gray-400'>July 2023 - Aug 2023</h1></div>
        <div className='w-4/5 h-full px-6 py-2'>
            <h1 className='text-base text-white font-medium text-lg group-hover:text-teal-400'>Intern - Software and Product Development · KDataScience Solutions</h1>
            <ol className='list-disc text-slate-400'>
            <li>Developed a Python application to fetch more than 10,00,000 tickets from Zendesk using their API and dump the data in SQL database. Provided the functionality to fetch tickets from different brands on basis of their brand id. </li>
            <li>Developed a Python application to automate download of Sales reports from Amazon Video Central using Video Central API. Provided the functionality to pass Start and End Dates, Frequency and Territory.  </li>
            <li>Worked with Youtube Analytics and Reporting APIs in Python to automate download of Analytics and Sales reports of a channel. Worked extensively with OAuth2.0 protocol in Reporting API for creation and working of Reporting Jobs for reports retrieval. </li>
            </ol>
        </div>
    </div>
  </div>
));

export default Experience;
