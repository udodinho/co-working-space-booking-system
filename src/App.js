import React, { useState } from 'react';
import Desk from './components/Desk';
import Booking from './components/Booking';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const initialDesk = [
    ...Array.from({ length: 10 }, (_, i) => ({ id: i + 1, type: "Individual", booked: false })),
    ...Array.from({ length: 5 }, (_, i) => ({ id: i + 11, type: "Team", booked: false })),
  ];

  const [desks, setDesks] = useState(initialDesk);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [revenue, setRevenue] = useState({ basic: 0, premium: 0, executive: 0, team: 0, total: 0 });

  const handleBooking = (id, hours, membership) => {
    const newDesks = desks.map((desk) =>
      desk.id === id ? { ...desk, booked: true } : desk
    );

    const rate =
      desks.type === "Individual"
        ? membership === "Basic"
          ? 14000
          : membership === "Premium"
          ? 21000
          : 28000
        : 35000;

    const discount = hours > 3 ? 0.9 : 1;
    const total = rate * hours * discount;

    const newRevenue = { ...revenue };
    if (desks.type === "Individual") {
      newRevenue[membership.toLowerCase()] += total;
    } else {
      newRevenue.team += total;
    }
    newRevenue.total += total;

    setDesks(newDesks);
    setSelectedDesk(null);
    setRevenue(newRevenue);
  };

  return (
    <div className="app">
      <h1>Co-working Space Booking System</h1>
      <div className="desks">
        {desks.map((desk) => (
          <Desk key={desk.id} desk={desk} onBooked={setSelectedDesk} />
        ))}
      </div>
      {selectedDesk && (
        <Booking desk={selectedDesk} onSubmit={handleBooking} />
      )}
      <Dashboard revenue={revenue} />
    </div>
  );
};

export default App;
