import React, { useState } from 'react';
import './App.css'

const CouponWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('try again');

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      setResult('try again');

      // Simulate wheel spinning for 2 seconds
      setTimeout(() => {
        const prizes = ['gift card 1', 'gift card 2', 'gift card 3'];
        const randomIndex = Math.floor(Math.random() * prizes.length);
        const randomPrize = prizes[randomIndex];

        setResult(randomPrize);
        setSpinning(false);
      }, 2000);
    }
  };

  return (
    <div className='coupon-wheel-container'>
      
      <div className={`wheel ${spinning ? 'spinning' : ''}`} onClick={spinWheel}>
        <div className="arrow"></div>
        <div className="wheel-inner">
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
        </div>
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default CouponWheel;
