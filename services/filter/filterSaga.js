import { put, takeEvery, call, all } from 'redux-saga/effects'

/** Import actions */
import { getFiltersFailed, getFiltersSucceed } from './filterActions'

/** Import api */
import * as filterApi from './filterApi'

export function * filtersSubscriber () {
  yield all([takeEvery('GET_FILTERS', filters)])
}

export function * filters () {
  try {
    const res = yield call(filterApi.filters)
    yield put(getFiltersSucceed(res))
  } catch (error) {
    yield put(getFiltersFailed(error))
  }
}
