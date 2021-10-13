const path = require('path');

const { interpolateName } = require('loader-utils');

/** 解决css-modules问题：css-loader和react-css-module生成的hash算法不一致 */
function generateScopedName(pattern) {
  const context = process.cwd();
  return function generate(localName, filepath) {
    const name = pattern.replace(/\[local\]/gi, localName);
    const loaderContext = {
      resourcePath: filepath,
    };

    const loaderOptions = {
      content: `${path
        .relative(context, filepath)
        .replace(/\\/g, '/')}\u0000${localName}`,
      context,
    };

    const genericName = interpolateName(loaderContext, name, loaderOptions);
    return genericName
      .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
      .replace(/^((-?[0-9])|--)/, '_$1');
  };
}

module.exports = generateScopedName;
