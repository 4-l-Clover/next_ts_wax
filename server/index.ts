import express from 'express'
import http from 'http'
import next from 'next'

require('dotenv').config({ path: '.env.local' })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // handling everything else with Next.js
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = parseInt(process.env.PORT, 10) || 5000

  http.createServer(server).listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
})
