import { createActions } from 'redux-actions'

const {
  getItemDetail,
  getItemDetailFailed,
  getItemDetailSucceed,
  getMoreSameItems,
  getMoreSameItemsFailed,
  getMoreSameItemsSucceed,
  getOffers,
  getOffersFailed,
  getOffersSucceed,
  getSalesHistory,
  getSalesHistoryFailed,
  getSalesHistorySucceed
} = createActions({
  GET_ITEM_DETAIL: params => ({ params }),
  GET_ITEM_DETAIL_FAILED: error => ({ error }),
  GET_ITEM_DETAIL_SUCCEED: currentItem => ({ currentItem }),
  GET_MORE_SAME_ITEMS: params => ({ params }),
  GET_MORE_SAME_ITEMS_FAILED: error => ({ error }),
  GET_MORE_SAME_ITEMS_SUCCEED: moreSameItems => ({ moreSameItems }),
  GET_OFFERS: params => ({ params }),
  GET_OFFERS_FAILED: error => ({ error }),
  GET_OFFERS_SUCCEED: offers => ({ offers }),
  GET_SALES_HISTORY: params => ({ params }),
  GET_SALES_HISTORY_FAILED: error => ({ error }),
  GET_SALES_HISTORY_SUCCEED: salesHistory => ({ salesHistory })
})

export {
  getItemDetail,
  getItemDetailFailed,
  getItemDetailSucceed,
  getMoreSameItems,
  getMoreSameItemsFailed,
  getMoreSameItemsSucceed,
  getOffers,
  getOffersFailed,
  getOffersSucceed,
  getSalesHistory,
  getSalesHistoryFailed,
  getSalesHistorySucceed
}
