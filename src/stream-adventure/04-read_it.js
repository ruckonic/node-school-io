import { Readable } from 'node:stream'

class CustomReadable extends Readable {}

function main() {
  const readable = new CustomReadable()
  const args = process.argv[2]

  readable.push(args)
  readable.pipe(process.stdout)
}

main()
