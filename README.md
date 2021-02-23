# Meme Generator
    - App is static. 
    - Some features include being able to download a chosen meme directly to your machine.
    - Makes Api call to retrieve the memes displayed on the home page, as seen below.
   
![alt text](https://user-images.githubusercontent.com/75445317/107823816-4566ee80-6d35-11eb-9577-732416261c2b.png)

     - Clicking on the button will take you to the second page where you can add text or download. 
 
![alt text](https://user-images.githubusercontent.com/75445317/107824819-f3bf6380-6d36-11eb-8264-6f459fd12d36.png)
    
## Common NPM commands in Yarn

|NPM Command | Yarn Command| Description (_wherever necessary_)|
|:---|:---|---|
|npm install|yarn <br/> yarn install|Will install packages listed in the `package.json` file|
|npm install `pkg-name` <br/> npm install --save `pkg-name`| yarn add `pkg-name`|By default Yarn adds the `pgk-name` to `package.json` and `yarn.lock` files|
|npm install `pkg-name@1.0.0` | yarn add `pgk-name@1.0.0`|
|npm install `pkg-name` --save-dev| yarn add `pkg-name` --dev|
|npm install `pkg-name` --peer| yarn add `pkg-name`--peer|
|npm install `pkg-name` --optional| yarn add --optional|
|npm install -g `pkg-name`| yarn global add `pkg-name`| Careful, yarn add global `pkg-name` adds packages `global` and `pkg-name` locally! |
|npm update | yarn upgrade| Note: It's called **upgrade** in yarn|
|npm uninstall `pkg-name`| yarn remove `pkg-name`|
|npm run `script-name`| yarn run `script-name`|
|npm init | yarn init|
|npm pack | yarn pack| Creates a compressed gzip archive of the package dependencies|
|npm link | yarn link|
|npm outdated | yarn outdated|
|npm publish | yarn publish|
|npm run | yarn run|
|npm cache clean | yarn cache clean|
|npm login | yarn login (and logout)|
|npm test | yarn test|
|npm install --production | yarn --production|
|npm  --version | yarn version|
|npm  info | yarn info|


### New Commands in Yarn
|Yarn Command | Description|
|---|---|
|yarn why `pkg-name` | Builds a dependency graph on why this package is being used|
|yarn clean | Frees up space by removing unnecessary files and folders from dependencies|
|yarn licenses ls | Inspect the licenses of your dependencies|
|yarn licenses generate-disclaimer | Automatically create your license dependency disclaimer|
