import path from 'path';

let config = {
    viewsDir: path.join(__dirname, '../', 'views'),
    staticDir:path.join(__dirname, '../', 'assets')//静态资源目录配置
};

//开发环境
if (process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3000,
        cache:false
    };
    config = { ...config, ...devConfig };
}

//生产环境
if (process.env.NODE_ENV === 'production') {
    const proConfig = {
        port: 80,
        cache: 'memory', 
    };
    config = { ...config, ...proConfig };
}

export default config;