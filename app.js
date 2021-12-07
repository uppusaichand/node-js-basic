
const http =require('http')
const server=http.createServer((req,res)=>{
    
    res.write("hello this is ")
    res.end()

})
server.listen(9000,'127.0.0.1',()=>{
    console.log("listing to request on port 9000")
})

   