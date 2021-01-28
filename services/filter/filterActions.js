import { createActions } from 'redux-actions'

const {
  getFilters,
  getFiltersFailed,
  getFiltersSucceed,
  changeTime,
  changeExterior,
  changeGame,
  changePrice,
  changeSortBy,
  filterSearch,
  changeBrand,
  changeStickerCount,
  clearFilters
} = createActions({
  GET_FILTERS: () => ({}),
  GET_FILTERS_FAILED: error => ({ error }),
  GET_FILTERS_SUCCEED: filters => ({ filters }),
  CHANGE_TIME: params => ({ params }),
  CHANGE_EXTERIOR: params => ({ params }),
  CHANGE_GAME: params => ({ params }),
  CHANGE_PRICE: params => ({ params }),
  CHANGE_SORT_BY: params => ({ params }),
  FILTER_SEARCH: params => ({ params }),
  CHANGE_BRAND: params => ({ params }),
  CHANGE_STICKER_COUNT: params => ({ params }),
  CLEAR_FILTERS: () => ({})
})

export {
  getFilters,
  getFiltersFailed,
  getFiltersSucceed,
  changeTime,
  changeExterior,
  changeGame,
  changePrice,
  changeSortBy,
  filterSearch,
  changeBrand,
  changeStickerCount,
  clearFilters
}
