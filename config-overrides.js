// webpack 自定义配置
const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    // 配置路径别名
    addWebpackAlias({
        '@': resolve('./src'),
        'components': resolve('./src/components'),
        'containers': resolve('./src/containers'),
        'utils': resolve('./src/utils'),
        'assets': resolve('./src/assets'),
    }),
    // antd按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    // redux @connect 装饰器配置
    addDecoratorsLegacy()
)