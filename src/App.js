import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/index';

function App() {
  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);
  console.log(state);
  console.log(account);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(depositMoney);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
