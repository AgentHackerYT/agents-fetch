# Agents Fetch
- Simple Http request package
- Considerably a Alternative for node-fetch / axios / got
- Uses no 3rd party dependencies

# Installation
- Using Github Source code: `npm i git+https://github.com/AgentHackerYT/agents-fetch`
- Using NPM: `npm i agents-api`
# Usage

- GET
```js

const { get } = require("agents-fetch")

get("https://httpbin.org/get", "Text", {headers: {test: "works?"}}, response =>{

    console.log(response)

})

```
- POST
```js

const { post } = require("agents-fetch")

get("https://httpbin.org/post", "Text", {headers: {test: "works?"}}, response =>{

    console.log(response)

})

```
# Credits

- Made By Agent Hacker#0477
- Made using https (inbuilt node module)
