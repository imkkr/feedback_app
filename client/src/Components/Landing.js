/** @format */

import React from 'react';
import bg from './background.jpg';
//

const Landing = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage:`url(${bg})`,
        height:'695px'
      }}
    >
      <h1 style={{ color: 'brown' }}>YourReview</h1>
      <p style={{ padding: '10px 5px' }}>Get feedback from your users.</p>
      <p>This is learning project. Login with any of your google account.</p>
      <p>
        For Payments StripeJs library is used.To increase credits in your
        account use credit card number 4242-4242-4242-4242 and any three digit
        pin.
      </p>
      <p>Expiry date can be anything later than today.</p>
    </div>
  );
};

export default Landing;
