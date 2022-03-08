import { createServer } from 'http'
import app from './router'

const PORT: number = 4000
const reload = require('reload')
const server = createServer(app)

function listen () {
  console.log(`http://127.0.0.1:${PORT}`)
}

function onSuccess (): void {
  server.listen(PORT, listen)
}

function onError (e: unknown): void {
  console.table(e)
  process.exit(1)
}

reload(app)
  .then(onSuccess)
  .catch(onError)
