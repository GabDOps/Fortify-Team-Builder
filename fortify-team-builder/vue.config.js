module.exports = {
  pwa: {
    name: 'Fortify Team Builder',
    short_name: 'Team Builder',
    themeColor: '#4A90E2',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      start_url: '.',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      icons: [
        {
          src: 'img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
};