# react-for-markdown-loader

> Convert Markdown file to React Component using markdown-it.

## Installation

```bash
npm i react-for-markdown-loader -D
```

## Feature
- Hot reload
- Write React script
- Code highlight


## Usage

`webpack.config.js` file:

```javascript
module.exports = {
  module: {
    loaders: [{
      test: /\.md/,
      loader: 'react-for-markdown-loader'
    }]
  }
};
```

## Options

reference [markdown-it](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)
```javascript
{
// markdown-it config
  preset: 'default',
  breaks: true,

  preprocess: function(markdownIt, source) {
  // do any thing
    return source
  },
  use: [
  /* markdown-it plugin */
    require('markdown-it-xxx'),
  /* or */
    [require('markdown-it-xxx'), 'this is options']
  ]
}
```

Or you can customize markdown-it
```javascript
var markdown = require('markdown-it')({
  html: true,
  breaks: true
})

markdown
  .use(plugin1)
  .use(plugin2, opts, ...)
  .use(plugin3);

module.exports = {
  module: {
    loaders: [{
      test: /\.md/,
      loader: 'react-for-markdown-loader'
    }]
  }

};
```
## Run Example
```
git clone https://github.com/skidxjq/react-markdown-loader
cd react-markdown-loader
npm run example
open http://localhost:8080
```
## Note
Resource references can only use **absolute path**
