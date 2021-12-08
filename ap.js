const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    const path = req.url
    if (path==='/profile'){
        res.end("good res")
    }else {
        res.writeHead(404),{
            'content-type':'text/html',
            'my-own-header':'hello'}
            res.end('<h1>page not found</h1>')
            
        }
        
})
server.listen(5000,'127.0.0.1',()=>{
    console.log("this is a server")
})