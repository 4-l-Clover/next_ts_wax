import { wrapRequest, xapi } from '../../utils'

const filters = wrapRequest(async () =>
  xapi().get('/get-filters/index')
)

export { filters }
