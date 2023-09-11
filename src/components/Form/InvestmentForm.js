import React from 'react';

const InvestmentForm = () => {
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'currentSavings') {
      console.log('currentSavings');
    } else if (identifier === 'yearlySavings') {
      console.log('yearlySavings');
    } else if (identifier === 'expectedReturn') {
      console.log('expectedReturn');
    } else {
      console.log('duration');
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log('form submitted');
  };

  const resetHandler = (event) => {
    console.log('reset clicked');
  };

  return (
    <form className='form' onSubmit={formSubmitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
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
