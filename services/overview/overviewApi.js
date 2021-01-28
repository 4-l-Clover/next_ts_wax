import { wrapRequest, xapi, xxapi } from '../../utils'

const currencies = wrapRequest(async () =>
  xxapi().get('/v1/get-currencies', {})
)

const items = wrapRequest(async params =>
  xapi().get('/data/index', { params })
)

export { currencies, items }
