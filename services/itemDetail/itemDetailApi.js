import { wrapRequest, xapi } from '../../utils'

const itemDetail = wrapRequest(async params =>
  xapi().get('/get-one-click', { params })
)

const moreSameItems = wrapRequest(async params =>
  xapi().post('/fetch-more-same-items', { name: params.name, time: params.time, ex: params.ex, skip: params.skip })
)

const offers = wrapRequest(async params =>
  xapi().get('/get-offers', { params })
)

const salesHistory = wrapRequest(async params =>
  xapi().post('/get-sales-history', { name: params.name })
)

export { itemDetail, moreSameItems, offers, salesHistory }
