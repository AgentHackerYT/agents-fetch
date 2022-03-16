let https = require('https')

async function fetch(url, type, options = {}) {

    let opt = options

    let Url = new URL(url)

    return new Promise(function(resolve, reject) {

        if(options == undefined || options == null){
    
            opt  = Object.assign(options, {host: Url.host, path: url.replace(url + url.split('/')[2], ""), method: "GET", headers: {'User-Agent': `Agents-Fetch / v${require("../package.json").version}`}})
        
            }
            
            if(options != undefined || options == null && options.host == undefined || options.path == undefined){
        
                opt  = Object.assign(options, {host: Url.host, path: url.replace(url + url.split('/')[2], ""), method: "GET", headers: {'User-Agent': `Agents-Fetch / v${require("../package.json").version}`}})
        
            }

            if(Url.protocol == "http:") https = require("http")

            https.get(opt).on('response', (res)=>{


                if(type == "response"){
            
                    resolve(res)
            
                    return;
            
                }

                res.on('data', (data)=>{
                    if(type.toLowerCase() == "json"){

                        resolve(JSON.parse(Buffer.from(data).toString("utf-8")))
             
                         }else if(type.toLowerCase() == "buffer"){
             
                         resolve(data)
             
                         }else if(type.toLowerCase() == "text"){
             
                         resolve(Buffer.from(data).toString("utf-8"))
             
                         }else if(type.toLowerCase() == "status"){
             
                             resolve({statusCode: res.statusCode, statusMessage: res.statusMessage})
             
                         }else{
             
                             reject("No Type Chose or The Chosen Type is not a type")
             
                         }
                })

            })
    })

}

module.exports = fetch
