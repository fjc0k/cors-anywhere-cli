#!/usr/bin/env node
import yargs from 'yargs'
import { run } from './run'

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

run({
  host: argv.host,
  port: argv.port,
})
