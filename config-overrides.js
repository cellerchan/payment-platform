const { injectBabelPlugin } = require('react-app-rewired');

const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    // 这里利用了 less-loader 的 modifyVars 来进行主题配置
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#45aafa" },
    })(config, env);
    return config;
};