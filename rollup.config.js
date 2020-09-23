import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

/** @type import('rollup').RollupOptions */
const config = {
  input: 'lib/docker.js',
  output: {
    file: 'dist/docker.js',
    format: 'commonjs',
  },
  plugins: [nodeResolve(), commonjs()],
}

export default config
