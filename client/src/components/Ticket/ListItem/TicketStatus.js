import React from 'react';

const TicketStatus = ({status}) => (
    <div className="ticket-status">
      <div className="status"></div>
      <span className="description">{status}</span>
    </div>
);

export default TicketStatus;