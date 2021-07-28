# highlightjs-xsharp
Syntax highlighting for X# files using Highlight.js.

## Usage
Simply include the Highlight.js library in your webpage or Node app, then load this module.

## Static website or simple usage
Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-xsharp/dist/xsharp.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

## With Node or another build system
If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsXsharp = require('highlightjs-xsharp');

hljs.registerLanguage("xsharp", hljsXsharp);
hljs.highlightAll();
```