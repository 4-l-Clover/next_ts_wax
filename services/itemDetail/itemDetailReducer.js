import { handleActions } from 'redux-actions'

import {
  getItemDetail,
  getItemDetailFailed,
  getItemDetailSucceed,
  getMoreSameItems,
  getMoreSameItemsFailed,
  getMoreSameItemsSucceed,
  getOffers,
  getOffersFailed,
  getOffersSucceed,
  getSalesHistory,
  getSalesHistoryFailed,
  getSalesHistorySucceed
} from './itemDetailActions'

const defaultState = {
  error: null,
  loading: false,
  currentItem: null,
  moreSameItems: [],
  offers: [],
  salesHistory: []
}

const reducer = handleActions(
  {
    [getItemDetail] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getItemDetailFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getItemDetailSucceed] (state, { payload: { currentItem } }) {
      return {
        ...state,
        currentItem: currentItem,
        loading: false
      }
    },
    [getMoreSameItems] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getMoreSameItemsFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getMoreSameItemsSucceed] (state, { payload: { moreSameItems } }) {
      // let currentItem = JSON.parse(JSON.stringify(state.currentItem))
      // currentItem.data[1][0] = currentItem.data[1][0].concat(moreSameItems)
      return {
        ...state,
        // currentItem: currentItem,
        moreSameItems: moreSameItems,
        loading: false
      }
    },
    [getOffers] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getOffersFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getOffersSucceed] (state, { payload: { offers } }) {
      return {
        ...state,
        offers: offers,
        loading: false
      }
    },
    [getSalesHistory] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getSalesHistoryFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getSalesHistorySucceed] (state, { payload: { salesHistory } }) {
      return {
        ...state,
        salesHistory: salesHistory,
        loading: false
      }
    }
  },
  defaultState
)

export default reducer
