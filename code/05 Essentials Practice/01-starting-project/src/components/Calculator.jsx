import { useState } from 'react';

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
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investmentResults.map(result => (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(result.totalInterest)}</td>
                <td>{formatter.format(result.investedCapital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {duration <= 0 && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}
