export default function CalculatorInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onInitialInvestmentChange,
  onAnnualInvestmentChange,
  onExpectedReturnChange,
  onDurationChange
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input required type="number" value={initialInvestment} onChange={onInitialInvestmentChange} id="initial-investment" />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input required type="number" value={annualInvestment} onChange={onAnnualInvestmentChange} id="annual-investment" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input required type="number" value={expectedReturn} onChange={onExpectedReturnChange} id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input required type="number" value={duration} onChange={onDurationChange} id="duration" />
        </p>
      </div>
    </section>
  );
}