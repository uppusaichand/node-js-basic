const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.end("hello sai")
})
server.listen(9000,'127.0.0.1',()=>{
    console.log("this is a server")
})