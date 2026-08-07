import { createRequire } from 'node:module'

export function readJSON (ruta) {
  const require = createRequire(import.meta.url)
  const data = require(ruta)

  return data
}
