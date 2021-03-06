const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const pretty = require('pretty');

//const publicPath = '/~/media/data-visualizations/interactives/2018/EIFP/' // <<== set this for each project

module.exports = env => {
    return merge(common(env), {
        mode: 'production',
        devtool: false,
        optimization: {
           /* minimizer: [
                new UglifyJSPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        },
                        output: {
                            comments: false
                        }
                    },
                }),
            ],*/
            splitChunks: {
                automaticNameDelimiter: '-',
                chunks: 'all'
            }
        },
        plugins: [
            
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'docs'),
                // Required - Routes to render.
                routes: ['/'],
                renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                    injectProperty: 'IS_PRERENDERING',
                    inject: true,
                   //headless: false,
                    //sloMo: 10000,
                   // renderAfterTime: 1000
                }),
              /*  postProcess: function(renderedRoute){
                    renderedRoute.html = renderedRoute.html.replace(/class="emitted-css" href="(.*?)"/,'class="emitted-css" href="' + publicPath + '$1' + '"');
                    renderedRoute.html = renderedRoute.html.replace(/class="emitted-bundle" src="(.*?)"/g,'class="emitted-bundle" src="' + publicPath + '$1' + '"');
                    //renderedRoute.html = renderedRoute.html.replace('src="js/index.js"','src="' + publicPath + 'js/index.js"');
                    renderedRoute.html = renderedRoute.html.replace(/<head>[\s\S].*<\/head>/,'').replace(/<\/?html>|<\/?body>/g,'');
                    renderedRoute.html = pretty(renderedRoute.html);
                    return renderedRoute;
                }*/
            }),
           
            new webpack.EnvironmentPlugin({
                'NODE_ENV': env
            }),
            new webpack.SourceMapDevToolPlugin({
              filename: '[name].js.map',
            }),
            new CleanWebpackPlugin(['docs']),
        ],
        output: {
            filename: '[name].js?v=[hash:6]',
            path: path.resolve(__dirname, 'docs'),
           // publicPath
        }
    });
};