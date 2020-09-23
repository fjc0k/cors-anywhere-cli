import cors from 'cors-anywhere'
import onExit from 'signal-exit'

export function run(options: { port: number; host: string }) {
  const server = cors.createServer()
  server.listen(options.port, options.host, () => {
    console.log(
      `The cors proxy server running on: http://${options.host}:${options.port}`,
    )
  })
  onExit(() => {
    server.close(() => {
      process.exit(0)
    })
  })
}
