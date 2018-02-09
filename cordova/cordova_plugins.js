cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "phonegap-plugin-media-stream.MediaDevices",
    "file": "plugins/phonegap-plugin-media-stream/www/MediaDevices.js",
    "pluginId": "phonegap-plugin-media-stream",
    "clobbers": [
      "navigator.mediaDevices"
    ]
  },
  {
    "id": "phonegap-plugin-media-stream.MediaStream",
    "file": "plugins/phonegap-plugin-media-stream/www/MediaStream.js",
    "pluginId": "phonegap-plugin-media-stream",
    "clobbers": [
      "MediaStream"
    ]
  },
  {
    "id": "cordova-plugin-qrscanner.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner",
    "clobbers": [
      "QRScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-compat": "1.2.0",
  "phonegap-plugin-media-stream": "1.2.1",
  "cordova-plugin-swift-support": "3.1.1",
  "cordova-plugin-qrscanner": "2.5.0"
};
// BOTTOM OF METADATA
});