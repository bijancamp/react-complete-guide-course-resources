import { useRef, useState } from 'react';

import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [ timerStarted, setTimerStarted ] = useState(false);
  const [ timerExpired, setTimerExpired ] = useState(false);

  const dialog = useRef();
  const timer = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
    <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime !== 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
    </>
  );
}