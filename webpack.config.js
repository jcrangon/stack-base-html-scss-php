const path = require('path');

module.exports = {
  entry: {
    main: './assets/js/app.js',
    styles: './assets/css/app.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true, // Active le mode watch
  module: {
    rules: [
      {
        test: /\.scss$/, // Sass files
        include: path.resolve(__dirname, 'assets/css'), // Inclure uniquement les fichiers Sass du dossier assets/css
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader',   // Convert CSS into CommonJS
          'sass-loader'   // Compile Sass to CSS
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
    open: true,
    onBeforeSetupMiddleware: function (devServer) {
      devServer.app.get('*.php', (req, res) => {
        res.sendFile(path.join(__dirname, req.path));
      });
    },
  }
};

