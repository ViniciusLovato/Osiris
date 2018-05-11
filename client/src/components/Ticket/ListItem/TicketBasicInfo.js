import React from 'react';

const TicketBasicInfo = ({subject, description}) => (
    <div className="ticket-info">
      <div className="header">
        <span className="subject">{subject}</span><span className="timestamp">Wednesday, May 28 at 2 p.m.</span>
      </div>
      <div>
        <span className="description">{description || `no description `}</span>
      </div>
    </div>
);

export default TicketBasicInfo;
