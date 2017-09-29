cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "com.allunite.sdk.cordova.AlluniteSDK",
        "file": "plugins/com.allunite.sdk.cordova/www/AlluniteSDK.js",
        "pluginId": "com.allunite.sdk.cordova",
        "clobbers": [
            "AlluniteSDK"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.7-dev",
    "com.allunite.sdk.cordova": "1.0.3",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});