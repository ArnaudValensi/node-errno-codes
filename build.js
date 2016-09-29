import request from 'request'
import dedent from 'dedent'
import fs from 'fs'

const uvheadloc = 'https://raw.githubusercontent.com/nodejs/node/master/deps/uv/include/uv.h'
const defreg = /^[ ]*XX\(([^,]+), "([^"]+)"\)/


request(uvheadloc, (err, response) => {
  if (err) throw err

  const data = response.body
    .split('\n')
    .map((line) => line.match(defreg))
    .filter((match) => match) // Remove null
    .map((match) => ({
      code: match[1],
      description: match[2],
    }))

  // console.log(data)

  let out = dedent`var all = [
    ${data.map((item) => `{
      code: '${item.code}',
      description: '${item.description}'
    }`)}
  ]\n\n`

  out += dedent`module.exports.code = {}

  all.forEach(function (error) {
    module.exports.code[error.code] = error.description
  })\n`

  console.log(out)

  fs.writeFile('errno.js', out)
})
