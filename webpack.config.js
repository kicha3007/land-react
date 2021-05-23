const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options = {}) => {

    const {mode = 'development'} = options;
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoaders = (isModules) => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    importLoaders: 1,
                    modules: isModules ? {
                        localIdentName: '[local]__[sha1:hash:hex:7]'
                    } : false
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                }
            }
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ]

        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'css/main.css'
            }))
        }

        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',

        module: {
            rules: [

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },

                //- Загрузка картинок
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },

                //- Загрузка шрифтов
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },

                //- Загрузка стилей

                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    oneOf: [
                        {
                            test: /\.module\.s?css$/,
                            use: [...getStyleLoaders(true)]
                        },
                        {
                            use: [...getStyleLoaders()]
                        }
                    ]
                },
            ],
        },

        plugins: getPlugins(),

        devServer: {
            open: true
        }

    }
};
