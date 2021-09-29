# Electron & React

## Installation
```
yarn
```
[windows install dependency problem](https://github.com/bowen-wu/electron_create-react-app#installation-1)

## Quick Setup Guide
1. Run render process 
   ```
   yarn start:renderer
   ```

2. Run main process
   ```
   yarn dev:main
   ```
   
## Build
```
yarn pack:electron
```
[windows build problem](https://github.com/bowen-wu/electron_create-react-app#build-1)

## Windows
### Installation
![Error](https://github.com/bowen-wu/electron_create-react-app/blob/master/img/windows_install_electron_error.png)

Solution
```
cd node_modules/electron
node install.js
```

### Build
` Error: electron-builder command not found `

Solution
```
npm i -g electron-builder
```
