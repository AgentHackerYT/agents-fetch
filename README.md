# Agents Fetch
- Simple Http request package
- Considerably an Alternative for node-fetch / axios / got
- Uses no 3rd party dependencies
# Usage
- Types:  JSON, Buffer, Status, Text, Response
- GET
```js

const { get } = require("agents-fetch")

get("https://httpbin.org/get", "Text", {headers: {test: "works?"}).then(got =>{

    console.log(got)

})


```
- POST
```js

const { post } = require("agents-fetch")

post("https://httpbin.org/post", "Text", {headers: {test: "works?"}).then(got =>{

    console.log(got)

})

```
- Default 
```js
const { default: fetch } =require("agents-fetch")

fetch("https://httpbin.org/get", "Text", {headers: {test: "works?"}).then(got =>{

    console.log(got)

})
```
# Credits

- Made By Agent Hacker#0477
- Made using https (inbuilt node module)

# Change Log
- 5.2.3 : Added Promise and fetch function
- 5.0.0 : Added http support
- 1.0.0 - 4.2.5 : 1st Version Of Module with Minor Fix
