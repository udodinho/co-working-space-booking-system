import React from 'react';

const Desk = ({ desk, onBooked }) => {
  return (
    <div className={`desk ${desk.booked ? 'booked' : ''}`} onClick={() => !desk.booked && onBooked(desk.id)}>
      <h2>{desk.type} Desk {desk.id}</h2>
      {desk.booked && <p>Booked</p>}
    </div>
  );
};

export default Desk;
