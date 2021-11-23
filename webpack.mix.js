const mix = require("laravel-mix");
// const LiveReloadPlugin = require("webpack-livereload-plugin");

mix.js("app/assets/js/app.js", "js").setPublicPath("public/dist/js");
mix.sass("app/assets/scss/style.scss", "css/").options({
    processCssUrls: false
}).setPublicPath("public/dist");

// mix.webpackConfig({
//   plugins: [new LiveReloadPlugin()],
// });
