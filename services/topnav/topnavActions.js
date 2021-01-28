import { createActions } from 'redux-actions'

const { loadGiveway, loadGivewayFailed, loadGivewaySucceed } = createActions({
  LOAD_GIVEWAY: () => ({}),
  LOAD_GIVEWAY_FAILED: error => ({ error }),
  LOAD_GIVEWAY_SUCCEED: giveway => ({ giveway })
})

export { loadGiveway, loadGivewayFailed, loadGivewaySucceed }
