import { put, takeEvery, call, all } from 'redux-saga/effects'

/** Import actions */
import {
  getItemDetailFailed,
  getItemDetailSucceed,
  getMoreSameItemsFailed,
  getMoreSameItemsSucceed,
  getOffersFailed,
  getOffersSucceed,
  getSalesHistoryFailed,
  getSalesHistorySucceed
} from './itemDetailActions'

/** Import api */
import * as itemDetailApi from './itemDetailApi'

export function * itemDetailSubscriber () {
  yield all([takeEvery('GET_ITEM_DETAIL', itemDetail)])
  yield all([takeEvery('GET_MORE_SAME_ITEMS', moreSameItems)])
  yield all([takeEvery('GET_OFFERS', offers)])
  yield all([takeEvery('GET_SALES_HISTORY', salesHistory)])
}

export function * itemDetail ({ payload: { params } }) {
  try {
    const res = yield call(itemDetailApi.itemDetail, params)
    yield put(getItemDetailSucceed(res))
  } catch (error) {
    yield put(getItemDetailFailed(error))
  }
}

export function * moreSameItems ({ payload: { params } }) {
  try {
    const res = yield call(itemDetailApi.moreSameItems, params)
    yield put(getMoreSameItemsSucceed(res.items[0]))
  } catch (error) {
    yield put(getMoreSameItemsFailed(error))
  }
}

export function * offers ({ payload: { params } }) {
  try {
    const res = yield call(itemDetailApi.offers, params)
    yield put(getOffersSucceed(res))
  } catch (error) {
    yield put(getOffersFailed(error))
  }
}

export function * salesHistory ({ payload: { params } }) {
  try {
    const res = yield call(itemDetailApi.salesHistory, params)
    yield put(getSalesHistorySucceed(res.data))
  } catch (error) {
    yield put(getSalesHistoryFailed(error))
  }
}
