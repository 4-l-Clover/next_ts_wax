import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/** Import service reducers */
import overviewReducer from './overview/overviewReducer'
import filterReducer from './filter/filterReducer'
import topnavReducer from './topnav/topnavReducer'
import itemDetailReducer from './itemDetail/itemDetailReducer'

// Import modal reducers

const servicesReducer = combineReducers({
  overview: overviewReducer,
  filter: filterReducer,
  topnav: topnavReducer,
  itemDetail: itemDetailReducer
})

export default combineReducers({
  routing: routerReducer,
  services: servicesReducer
})
