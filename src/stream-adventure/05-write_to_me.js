import { Writable } from 'node:stream'

function main() {
  const writable = new Writable({
    write(chunk, encoding, callback) {
      console.log('writing:', chunk.toString())
      callback()
    },
  })

  process.stdin.pipe(writable)
}

main()
