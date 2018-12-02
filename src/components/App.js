import React, { Component } from 'react';

import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';

import configureStore from '../store/configureStore';

import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
