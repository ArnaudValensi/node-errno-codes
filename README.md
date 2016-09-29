# node-errno-codes

Get human readable error message from errno code string like 'EHOSTDOWN'.

## Usage

```javascript
import errno from 'node-errno-codes'

...

console.log(`Error: ${errno.code[error.code]}`);

// Output: 'Error: host is down'
//
// for error
// {
//   code: 'EHOSTDOWN',
//   errno: 'EHOSTDOWN',
//   syscall: 'connect',
//   address: '80.249.99.148',
//   port: 80
// }
```

## Rebuild errno mapping from latest node's libuv header

* Clone this repo
* `npm install`
* `npm run build`

The file `errno.js` is recreated with the last informations.

## Credit

This is inspired from the repository: https://github.com/rvagg/node-errno

## Licence

Made available under the MIT licence:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
