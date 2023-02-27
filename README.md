27 Feb 2023

Note:  Some dependencies aren't nesessary from fresh proect but included .. you need these dependencies future for example "registry to ICP chain"  

How to join Motoko and React after dfx new ["your project name"] command.

all files included .. see files outside from this file.

required --> tsconfig.json

required --> you should adit axisting webpack.config.js
copy file from here or finde what is different between your webpack file and file from here

required --> you need to install aditional dependencis command -- >(npm i @dfinity/auth-client @dfinity/authentication @dfinity/identity bootstrap lit-html react react-bootstrap react-dom react-hook-form react-router-dom ts-loader typescript webpack-cli css-loader style-loader svg-url-loader url-loader)

or just copy pachage.json file from here! and after simply tap this command in your command line from correct project root directory command (npm i)


required --> change index.js file whith index.jsx 

---
Note: see files above
---

change index.html file


if you wanna to add canisters you should adit dfx.json file (in my example i add nft canister)
