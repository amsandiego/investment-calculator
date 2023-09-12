import React, { useState } from 'react';

const defaultInput = {
  currentSavings: 10000,
  yearlySavings: 1200,
  expectedReturn: 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(defaultInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = (event) => {
    setUserInput(defaultInput);
  };

  return (
    <form className='form' onSubmit={formSubmitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            value={userInput.currentSavings}
            id='current-savings'
            onChange={(event) =>
              inputChangeHandler('currentSavings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            value={userInput.yearlySavings}
            id='yearly-contribution'
            onChange={(event) =>
              inputChangeHandler('yearlySavings', event.target.value)
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            value={userInput.expectedReturn}
            id='expected-return'
            onChange={(event) =>
              inputChangeHandler('expectedInterest', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput.duration}
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
          />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' className='buttonAlt' onClick={resetHandler}>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
