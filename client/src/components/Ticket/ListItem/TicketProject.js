import React from 'react';
import Tags from '../../UI/Tags/Tags';

const TicketProject = ({name, tags}) => (
    <div className="project-info">
      <header className="project">{name}</header>
      <Tags />
    </div>
);

export default TicketProject;