
# Highlight.js syntax highlighting

## Contents
`src/languages` contains the source file for developing the language definition.
`test/` contains two subfolders. These test the language auto-detection and the correct styling/markup of the file.

## Init
First pull the current version of the [highlight.js repository][repo]. Make sure that you clone the `highlightjs-xsharp` project into `highlight.js/extra/`.

## Test
Test your project with the commands listed at [guide].

## Publish
The project should always be published on the web and node.js. 

### Web
The `dist` folder contains the javascript files that are published. These can be auto-generated with the script at highlight.js. See [packaging] for this.

### Node.js
See the following guide to update the package [npm-update].
Make sure that you are logged in with `npm login` and that you have write access to the public package.

[repo]: https://github.com/highlightjs/highlight.js
[guide]: https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md

[packaging]: https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md#packaging

[npm-update]: https://docs.npmjs.com/updating-your-published-package-version-number