import { useState } from 'react';

import CalculatorResults from './CalculatorResults';
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  const handleInitialInvestmentChange = e => {
    setInitialInvestment(e.target.value !== '' ? Number(e.target.value) : 0);
  };

  const handleAnnualInvestmentChange = e => {
    setAnnualInvestment(e.target.value !== '' ? Number(e.target.value) : 0);
  };

  const handleExpectedReturnChange = e => {
    setExpectedReturn(e.target.value !== '' ? Number(e.target.value) : 0);
  };

  const handleDurationChange = e => {
    setDuration(e.target.value !== '' ? Number(e.target.value) : 0);
  };

  const investmentResults = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input required type="number" value={initialInvestment} onChange={handleInitialInvestmentChange} id="initial-investment" />
          </p>
          <p>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input required type="number" value={annualInvestment} onChange={handleAnnualInvestmentChange} id="annual-investment" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Return</label>
            <input required type="number" value={expectedReturn} onChange={handleExpectedReturnChange} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input required type="number" value={duration} onChange={handleDurationChange} id="duration" />
          </p>
        </div>
      </section>
      {duration > 0 && (
        <CalculatorResults investmentResults={investmentResults} />
      )}
      {duration <= 0 && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}
