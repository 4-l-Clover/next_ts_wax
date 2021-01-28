import { put, takeEvery, call, all } from 'redux-saga/effects'

/** Import actions */
import { getCurrenciesFailed, getCurrenciesSucceed, getItemsFailed, getItemsSucceed } from './overviewActions'

/** Import api */
import * as overviewApi from './overviewApi'

export function * overviewSubscriber () {
  yield all([takeEvery('GET_CURRENCIES', currencies)])
  yield all([takeEvery('GET_ITEMS', items)])
}

export function * currencies () {
  try {
    const res = yield call(overviewApi.currencies)
    yield put(getCurrenciesSucceed(res.data))
  } catch (error) {
    yield put(getCurrenciesFailed(error))
  }
}

export function * items ({ payload: { params } }) {
  try {
    const res = yield call(overviewApi.items, params)
    yield put(getItemsSucceed(res))
  } catch (error) {
    yield put(getItemsFailed(error))
  }
}
