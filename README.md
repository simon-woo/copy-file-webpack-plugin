### Usage


#### webpack.config.js
```shell
npm install copy-file-webpack-plugin -D
```

```javascript
const copyPlugin = require('copy-file-webpack-plugin')

module.exports = {
  ...
  plugins: [
    new CopyPlugin({
      from: 'a',
      to: 'b'
    })
  ]
}

// And then the folder of a has copied to folder b.
// Eonugh your happy time!
```
