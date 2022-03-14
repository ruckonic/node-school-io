import { createReadStream } from 'node:fs'

createReadStream(process.argv[2]).pipe(process.stdout)
