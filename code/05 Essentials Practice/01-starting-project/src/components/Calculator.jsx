import { useState } from 'react';

import CalculatorInput from './CalculatorInput';
import CalculatorResults from './CalculatorResults';

import { calculateInvestmentResults } from '../util/investment';

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
      <CalculatorInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onDurationChange={handleDurationChange}
      />
      {duration > 0 && (
        <CalculatorResults investmentResults={investmentResults} />
      )}
      {duration <= 0 && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}
