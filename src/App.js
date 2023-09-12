import React, { useState } from 'react';
import InvestmentForm from './components/Form/InvestmentForm';
import InvestmentTable from './components/Table/InvestmentTable';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; //derived state based on userInput state

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlySavings = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlySavings;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable />
    </div>
  );
}

export default App;
