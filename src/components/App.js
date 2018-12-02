import React, { Component } from 'react';

import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';

import configureStore from '../store/configureStore';

import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 500 }));

store.dispatch(
  addExpense({ description: 'Gas bill', amount: 300, createdAt: 1000 })
);

store.dispatch(addExpense({ description: 'Water bill', amount: 1950 }));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
