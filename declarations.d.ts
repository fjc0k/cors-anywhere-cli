declare module 'cors-anywhere' {
  import http from 'http'

  export function createServer(options: {
    corsMaxAge: number
    httpProxyOptions: {
      xfwd: boolean
    }
  }): http.Server
}
