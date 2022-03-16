const https = require('https')

function get(url="", type, options = {},response){

    const Url = new URL(url)

    let opt = options

    if(options == undefined || options == null){
    
    opt  = Object.assign(options, {host: Url.host, path: Url.pathname, method: "GET", headers: {'User-Agent': `Agents-Fetch / v${require("../package.json").version}`}})

    }
    
    if(options != undefined || options == null && options.host == undefined || options.path == undefined){

        opt  = Object.assign(options, {host: Url.host, path: Url.pathname, method: "GET", headers: {'User-Agent': `Agents-Fetch / v${require("../package.json").version}`}})

    }


    const fetch = https.get(opt)

fetch.on("response", (res) =>{

    if(!response) return;

    if(type == "response"){

        response(res)

        return;

    }
        res.on('data', (data) =>{

            if(type.toLowerCase() == "json"){

           response(JSON.parse(Buffer.from(data).toString("utf-8")))

            }else if(type.toLowerCase() == "buffer"){

            response(data)

            }else if(type.toLowerCase() == "text"){

            response(Buffer.from(data).toString("utf-8"))

            }else if(type.toLowerCase() == "status"){

                response({statusCode: res.statusCode, statusMessage: res.statusMessage})

            }else{

                response("No Type Chose or The Chosen Type is not a type")

            }

        })

    })
}

module.exports = get

