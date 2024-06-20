import React from 'react';

const Dashboard = ({ revenue }) => {
  return (
    <div className="dashboard">
      <h2>Total Revenue</h2>
      <p>Basic: ₦{revenue.basic}</p>
      <p>Premium: ₦{revenue.premium}</p>
      <p>Executive: ₦{revenue.executive}</p>
      <p>Team: ₦{revenue.team}</p>
      <h3>Total: ₦{revenue.total}</h3>
    </div>
  );
};

export default Dashboard;
