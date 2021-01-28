import { handleActions } from 'redux-actions'

import {
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
} from './filterActions'

const defaultState = {
  filters: {},
  filterTime: 'any',
  filterExterior: ['FN', 'MW', 'FT', 'WW', 'BS'],
  filterGame: 'csgo',
  minPrice: 0,
  maxPrice: 0,
  filterSortBy: 'best_deals',
  filterSearchText: '',
  filterBrand: [],
  filterStickerCount: 'any'
}

const reducer = handleActions(

  {
    [getFilters] (state) {
      return {
        ...state,
        error: null,
        loading: true
      }
    },
    [getFiltersFailed] (state, { payload: { error } }) {
      return {
        ...state,
        error: error || null,
        loading: false
      }
    },
    [getFiltersSucceed] (state, { payload: { filters } }) {
      return {
        ...state,
        filters: filters.filters,
        loading: false
      }
    },
    [changeTime] (state, { payload: { params } }) {
      return {
        ...state,
        filterTime: params
      }
    },
    [changeExterior] (state, { payload: { params } }) {
      return {
        ...state,
        filterExterior: params
      }
    },
    [changeGame] (state, { payload: { params } }) {
      return {
        ...state,
        filterGame: params
      }
    },
    [changePrice] (state, { payload: { params } }) {
      return {
        ...state,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice || 0
      }
    },
    [changeSortBy] (state, { payload: { params } }) {
      return {
        ...state,
        filterSortBy: params
      }
    },
    [filterSearch] (state, { payload: { params } }) {
      return {
        ...state,
        filterSearchText: params
      }
    },
    [changeBrand] (state, { payload: { params } }) {
      return {
        ...state,
        filterBrand: params
      }
    },
    [changeStickerCount] (state, { payload: { params } }) {
      return {
        ...state,
        filterStickerCount: params
      }
    },
    [clearFilters] (state) {
      return {
        ...state,
        filterTime: 'any',
        filterExterior: ['FN', 'MW', 'FT', 'WW', 'BS'],
        filterGame: 'csgo',
        minPrice: 0,
        maxPrice: state.filters.max || 0,
        filterSortBy: 'best_deals',
        filterSearchText: '',
        filterBrand: [],
        filterStickerCount: 'any'
      }
    }
  },
  defaultState
)

export default reducer
