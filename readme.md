# react-render-cli
[![NPM](https://nodei.co/npm/react-render-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-render-cli/)

[![dependencies](https://david-dm.org/PlatziDev/react-render-cli.png)](https://david-dm.org/sergiodxa/react-render-cli)

CLI app to render React components to strings and output the result on console.

It don't support JSX, ES2015/6 & ES2016/7, you need the send the transpiled file to a Node.js 4.2.1 compatible code.

## Installation
```bash
[sudo] npm i -g react-render-cli
```

## Usage
```bash
Usage: react-render [component path]

Options:

  -h, --help           output usage information
  -V, --version        output the version number
  -p, --props [props]  Props to pass into the component (JSON string)
  -s, --static         If the markup is static (without data-reactid)
```

## Examples
### Without props
```bash
react-render MyComponent.jsx
```

#### Static markup
```bash
react-render MyComponent.jsx -s
```

### With props
```bash
react-render MyComponent.jsx -p '{"text":"Hello World"}'
```

#### Static markup
```bash
react-render MyComponent.jsx -p '{"text":"Hello World"}' -s
```

## Build binary
If you need a performance boost you can build a binary application usign the command:

```
npm run build
```

This will output a *react-render-cli* file with Node.js incorpored. The binary can run in almost half of the time.

## Test
```bash
npm i && npm test
```

## License
The MIT License (MIT)

Copyright (c) 2014 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
