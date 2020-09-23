declare module 'cors-anywhere' {
  import http from 'http'

  export function createServer(): http.Server
}
