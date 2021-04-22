// vue.config.js
module.exports = {
    // 选项
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: 'dist',
    pwa: {
        name: 'Zorro',
        themeColor:  '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        iconPaths: {
            favicon32: 'img/icons/apple-touch-icon-60x60.png',
            favicon16: 'img/icons/apple-touch-icon-60x60.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-60x60.png',
            maskIcon: 'img/icons/apple-touch-icon-60x60.png',
            msTileImage: 'img/icons/apple-touch-icon-60x60.png'
        }
    }
}