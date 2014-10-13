# enable-debug

Enable [debug](https://github.com/visionmedia/debug) logs via query-string.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install enable-debug
```

## API

### `enableDebug(ids, disableFirst)`

* `ids`: `Array`  
List of debug ids that are enabled without query string.  
Same as `debug.enable('id')`.

* `disableFirst`: `Boolean`  
Call `debug.disable()` before enabling debug.

## Usage

```js
var enableDebug = require('enable-debug');
enableDebug(['foo', 'bar'], true);

var debug = require('debug');
debug('foo')('yes');
debug('bar')('yes');
debug('baz')('no');

// enables via url
debug('url')('yes');
debug('route')('yes');

// ?debug=url,route
// >> debug: foo, bar, url, route
```

## License

MIT
