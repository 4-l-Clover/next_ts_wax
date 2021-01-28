import { handleActions } from 'redux-actions'

import {
  getCurrencies,
  getCurrenciesFailed,
  getCurrenciesSucceed,
  getItems,
  getItemsFailed,
  getItemsSucceed
} from './overviewActions'
import {
  changeTime,
  changeExterior,
  changeGame,
  changePrice,
  changeSortBy,
  filterSearch,
  changeBrand,
  changeStickerCount,
  clearFilters
} from '../filter/filterActions'

const defaultState = {
  currencies: [],
  items: [],
  error: null,
  loading: false
}

const reducer = handleActions(
  {
    [getCurrencies] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getCurrenciesFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getCurrenciesSucceed] (state, { payload: { currency } }) {
      return {
        ...state,
        currencies: currency,
        loading: false
      }
    },
    [getItems] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getItemsFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getItemsSucceed] (state, { payload: { items } }) {
      return {
        ...state,
        items: state.items.concat(items.items),
        loading: false
      }
    },
    [changeTime] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changeExterior] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changeGame] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changePrice] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changeSortBy] (state) {
      return {
        ...state,
        items: []
      }
    },
    [filterSearch] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changeBrand] (state) {
      return {
        ...state,
        items: []
      }
    },
    [changeStickerCount] (state) {
      return {
        ...state,
        items: []
      }
    },
    [clearFilters] (state) {
      return {
        ...state,
        items: []
      }
    }
  },
  defaultState
)

export default reducer
