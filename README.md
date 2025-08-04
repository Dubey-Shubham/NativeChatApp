# Creating a Whatsapp clone to learn

## SetUp and Installation

1. 
- npx create-expo-app@latest
- npm install --save react-native-size-matters (for text etc size responsiveness)
- npm i react-native-country-codes-picker  (for country dropdown)
- npm i react-native-otp-entry (for custom otp input component)
- npm i react-native-mmkv  (fastest key value storage for react native)
for mmkv there beed to be done a few things so see them go to utils.js in utils
2. Delete all the hooks, compo, script, app and non neccessary folders

## Setting Up folder Structure

1. Create main folder src 
2. inside this add app and move assets inside src
3. add ./src in front of paths of /assets in app.json
4. create component folder for components with atom and molecule sub folders
5. create hooks for custom hooks
6. create constants for writing constant files add an imagePath.js file to export images
7. create styles for styling
8. create utils for utilities, api etc
9. create translation for  multi language support

## Start splash screen and stack in layout

1. You can create appicon and splash screen in images folder you will find these images
2. go to https://www.figma.com/community/file/1155362909441341285 and here you can add image to icon and splash screen
3. download icon, splash screen and adaptive-icon and replace them with the ones in images
4. create stacks
- create main and auth folders for 2 stacks one for login routing other for main routing
- in main layout make logic to redirect to auth or main stack based on login status
- now will start from auth stack

## Auth Stack
1. create files for index, login, verify_otp, terms_agree
2. in auth layout create stack for all files
3. The screen has been made in the following order
   => index => terms_agree => login

