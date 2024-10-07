import React from 'react';

const Projects = React.forwardRef((props, ref) => (
  <div ref={ref} className='projects h-screen bg-yellow-600 snap-start'>
    Projects
  </div>
));

export default Projects;
