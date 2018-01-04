import * as React from 'react';

// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
window.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
  return 0;
};

module.exports = React;
