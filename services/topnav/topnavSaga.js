import { put, takeEvery, call, all } from 'redux-saga/effects'

/** Import actions */
import { loadGivewayFailed, loadGivewaySucceed } from './topnavActions'

/** Import api */
import * as topnavApi from './topnavApi'

export function * topnavSubscriber () {
  yield all([takeEvery('LOAD_GIVEWAY', giveway)])
}

export function * giveway () {
  try {
    const res = yield call(topnavApi.giveway)
    yield put(loadGivewaySucceed(res))
  } catch (error) {
    yield put(loadGivewayFailed(error))
  }
}
