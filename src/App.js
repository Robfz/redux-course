import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';

import TransactionsList from './components/TransactionsList';
import AddTransactionModal from './components/AddTransactionModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AddTransactionModal />
          <TransactionsList />
        </div>
      </Provider>
    );
  }
}

export default App;
