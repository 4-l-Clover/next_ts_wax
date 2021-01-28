import { wrapRequest, xapi } from '../../utils'

const giveway = wrapRequest(async () => xapi().get('/giveaway'))

export { giveway }
