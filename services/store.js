import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import * as history from 'history'
// Import reducers
import * as reducers from '../services/reducer'

/**
 * Import Saga subscribers
 */

import { overviewSubscriber, filtersSubscriber, topnavSubscriber, itemDetailSubscriber } from '../services/saga'
import { all } from 'redux-saga/effects'

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const reducer = combineReducers({
  ...reducers,
  form: formReducer,
  toastr: toastrReducer
})

const store = createStore(reducer, initialState, composedEnhancers)

/**
 *
 * Run saga subscribers
 *
 */
function * rootSaga () {
  yield all([overviewSubscriber(), filtersSubscriber(), topnavSubscriber(), itemDetailSubscriber()])
}
sagaMiddleware.run(rootSaga)
export default store
