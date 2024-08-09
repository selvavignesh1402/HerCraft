import React from 'react';
import './Stepper.css';


const statuses = ["Pending", "Shipped", "In Transit", "Delivered"];

const Stepper = ({ currentStatus, stepperData = [] }) => {
  // Ensure stepperData is an array
  if (!Array.isArray(stepperData)) {
    return <p>No tracking data available.</p>;
  }

  return (
    <div className="order-tracking">
      <h2>Order Tracking</h2>
      <div className="tracking-steps">
        {stepperData.length === 0 ? (
          <p>No tracking steps available.</p>
        ) : (
          stepperData.map((step, index) => (
            <div
              key={index}
              className={`tracking-step ${
                statuses.indexOf(step.status) <= statuses.indexOf(currentStatus)
                  ? 'completed'
                  : 'pending'
              }`}
            >
              <span className="step-date">{step.date}</span>
              <span className="step-status">{step.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Stepper;
