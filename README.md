
### setup
     npm install
     
### add your plugin
      cordova plugin add https://github.com/allunite/cordova-sdk
      
### remove your plugin
       cordova plugin rm com.allunite.sdk.cordova
       
### Run on device 
     cordova run android
     
### Expected  
After calling  AlluniteSDK.initSdk(success, failure) success or failure callback to be called.

### Experinced  
After calling AlluniteSDK.initSdk(success, failure) nothing happens

Other AlluniteSDK function seems to work fine.
   
     
### My configuration
Windows 8.1
Cordova v7.0.1
npm - v4.0.3
node - v6.9.1

