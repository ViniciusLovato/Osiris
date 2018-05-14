import React from 'react';

const TicketDetail = (props) => (
  <div>{props.match.params.id}</div>
);

export default TicketDetail;