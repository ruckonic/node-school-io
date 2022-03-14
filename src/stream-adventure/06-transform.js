import { Transform } from 'node:stream'

function main() {
  const transform = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().toUpperCase())
    },
  })

  process.stdin.pipe(transform).pipe(process.stdout)
}

main()
