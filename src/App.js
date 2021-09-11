import React from 'react';
import './App.css';

const denominations = [
  {'singleName': 'one hundred dollar bill', 'pluralName': 'one hundred dollar bills', 'value': 10000},
  {'singleName': 'fifty dollar bill', 'pluralName': 'fifty dollar bills', 'value': 5000},
  {'singleName': 'twenty dollar bill', 'pluralName': 'twenty dollar bills', 'value': 2000},
  {'singleName': 'ten dollar bill', 'pluralName': 'ten dollar bills', 'value': 1000},
  {'singleName': 'five dollar bill', 'pluralName': 'five dollar bills', 'value': 500},
  {'singleName': 'one dollar bill', 'pluralName': 'one dollar bills', 'value': 100},
  {'singleName': 'quarter', 'pluralName': 'quarters', 'value': 25},
  {'singleName': 'dime', 'pluralName': 'dimes', 'value': 10},
  {'singleName': 'nickel', 'pluralName': 'nickels', 'value': 5},
  {'singleName': 'penny', 'pluralName': 'pennies', 'value': 1},
];

function App() {
  //state
  const [changeAmount, setChangeAmount] = React.useState(0)

  //functions
  const onChangeAmount = (event) => {
    setChangeAmount(event.target.value);
  };
  return (
    <div className="App">
      <header>Change Calculator</header>
      <hr />
      
      <div>
        <p>Enter the change amount to return to the customer,</p>
        <p>We'll tell you what to give them!</p>
      </div>

      <div>
        <label htmlFor='change-amt'>Change amount: </label>
        <input 
          className='input'
          id='change-amt'
          type='number'
          min='0.01'
          step='0.01'
          onChange={(event) => onChangeAmount(event)}
          // value={changeAmount}
          placeholder='enter amount'
        >
        </input>
      </div>

      <hr />

      <div>
        <p>Please give the customer: </p>
        <p>ANSWER</p>
      </div>
    </div>
  );
}

export default App;
