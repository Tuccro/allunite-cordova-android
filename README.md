
## My configuration:

**Android 7.1.1

**Ubuntu 15

**Cordova v7.0.1**

**npm - v4.0.3**

**node - v6.9.1**




### setup
     npm install

      
### remove your plugin
       cordova plugin rm com.allunite.sdk.cordova
     
### add your plugin
      cordova plugin add https://github.com/allunite/cordova-sdk
      
### add your app credentials to AndroidManifest.xml file
      find AndroidManifest at PROJECT_DIR/platforms/android/AndroidManifest.xml and add app credentials to Application as it described at documentation https://github.com/allunite/cordova-sdk/blob/master/README.md
      
#### If you see this error      
     Probably this is either a connection problem, or plugin spec is incorrect.
     Check your connection and plugin name/version/URL.
     Failed to get absolute path to installed module

Solutions seems to be:
Delete everything allUnite related from package.json and the "allunite-cordova-sdk" folder inside node_modules, then try to add plugin again.

     Remove fra package.json
     "allunite-cordova-sdk": "git+https://github.com/allunite/cordova-sdk.git",
     
     "com.allunite.sdk.cordova": "https://github.com/allunite/cordova-sdk.git"
     
     "com.allunite.sdk.cordova": {}

       
### Run on device 
     cordova run android
     
### Expected  
After calling  AlluniteSDK.initSdk(success, failure) success or failure callback to be called.

### Experinced  
After calling  AlluniteSDK.initSdk(success, failure) success or failure callback to be called.

Other AlluniteSDK functions are work fine too.
