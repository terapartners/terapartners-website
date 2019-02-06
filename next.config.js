// next.config.js
if (typeof require !== "undefined") {
    require.extensions[".less"] = () => {};
    require.extensions[".css"] = (file) => {};
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS()
