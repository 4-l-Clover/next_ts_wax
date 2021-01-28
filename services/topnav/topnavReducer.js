import { handleActions } from 'redux-actions'

import {
  loadGiveway,
  loadGivewayFailed,
  loadGivewaySucceed
} from './topnavActions'

const defaultState = {
  giveway: {},
  error: null,
  loading: false
}
const reducer = handleActions(
  {
    [loadGiveway] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [loadGivewayFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [loadGivewaySucceed] (state, { payload: { giveway } }) {
      return {
        ...state,
        giveway: giveway,
        loading: false
      }
    }
  },
  defaultState
)

export default reducer
