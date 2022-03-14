import { Transform } from 'node:stream'
import { StringDecoder } from 'node:string_decoder'

function transformLines() {
  let numberOfLines = 0
  const decoder = new StringDecoder('utf8')

  return new Transform({
    autoDestroy: true,
    transform(chunk, _, cb) {
      const lines = decoder.end(chunk)
      const lastChar = lines[lines.length - 1]

      if (lastChar !== '\n') {
        decoder.write(chunk)

        return cb()
      }

      numberOfLines++

      const isEven = numberOfLines % 2 === 0

      cb(null, isEven ? lines.toUpperCase() : lines.toLowerCase())
    },
  })
}

function main() {
  process.stdin.pipe(transformLines()).pipe(process.stdout)
}

main()
