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
  const [changeAmount, setChangeAmount] = React.useState('');
  const [answer, setAnswer] = React.useState();

  //functions
  const onChangeAmount = (event) => {
    // debugger;
    let inputAmount = event.target.value;
    let re =  /(\d*)(\.*)(\d{0,2})/;
    let ans = inputAmount.match(re);
    setChangeAmount(ans[1] + ans[2] + ans[3]);
  };

  const onClickCalc = () => {
    let re = /(\d*)\.*(\d*)/
    let subArr = changeAmount.match(re)
    let dollars = subArr[1] === '' ? 0 : parseInt(subArr[1]) * 100
    let cents = subArr[2] === '' ? 0 : parseInt(subArr[2])
    cents = cents < 10 ? cents * 10 : cents
    let remainderCents = dollars + cents

    setAnswer(denominations.map((d, index) => {
      let quotient = Math.floor(remainderCents/d.value);
      remainderCents = remainderCents % d.value;
      if (quotient === 1) {
        return <p key={index}>{quotient} {d.singleName}</p>
      } else if (quotient > 1) {
        return <p key={index}>{quotient} {d.pluralName}</p>
      } else {
        return null;
      };
    }));
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
          type='text'
          onChange={(event) => onChangeAmount(event)}
          value={changeAmount}
          placeholder='0.00'
        >
        </input>
        <button
          className='button'
          id='calc-btn'
          type='submit'
          onClick={() => onClickCalc()}
        >
          Calculate Change
        </button>
      </div>

      <hr />

      <div>
        <p>Please give the customer: </p>
        <div>{answer}</div>
      </div>
    </div>
  );
}

export default App;
