#!/usr/bin/env node
import cors from 'cors-anywhere'
import onExit from 'signal-exit'
import yargs from 'yargs'

const argv = yargs.usage('Usage: $0 [options]').options({
  port: {
    alias: 'p',
    type: 'number',
    describe: 'The server port',
    demandOption: true,
  },
  host: {
    alias: 'h',
    type: 'string',
    describe: 'The server host',
    default: '0.0.0.0',
  },
}).argv

const server = cors.createServer()
server.listen(argv.port, argv.host, () => {
  console.log(
    `The cors proxy server running on: http://${argv.host}:${argv.port}`,
  )
})
onExit(() => {
  server.close(() => {
    process.exit(0)
  })
})
