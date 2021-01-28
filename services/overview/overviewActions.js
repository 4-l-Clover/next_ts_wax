import { createActions } from 'redux-actions'

const {
  getCurrencies,
  getCurrenciesFailed,
  getCurrenciesSucceed,
  getItems,
  getItemsFailed,
  getItemsSucceed
} = createActions({
  GET_CURRENCIES: () => ({}),
  GET_CURRENCIES_FAILED: error => ({ error }),
  GET_CURRENCIES_SUCCEED: currency => ({ currency }),
  GET_ITEMS: params => ({ params }),
  GET_ITEMS_FAILED: error => ({ error }),
  GET_ITEMS_SUCCEED: items => ({ items })
})

export {
  getCurrencies,
  getCurrenciesFailed,
  getCurrenciesSucceed,
  getItems,
  getItemsFailed,
  getItemsSucceed
}
