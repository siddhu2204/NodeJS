const fs = require('fs');

const requestHandler = (req,res)=>{
const url = req.url;
const method = req.method;
if(url==='/')
{
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Enter Message</title></head>');
res.write('<body><form action="/message" method="POST">Name:<input type="text" name="message"><button type="Submit">Send</button></form></body>');
res.write('</html>');
return res.end();
}
if(url==='/message' && method==='POST')
{
    const data =[];
    req.on('data', function(chunk)
    {
        console.log(chunk);
        data.push(chunk);
    });

    return req.on('end',()=>{
        const result = Buffer.concat(data).toString();
        console.log(result);
        const message = result.split('=')[1];
        console.log(message);
        fs.writeFile('Message.txt',message,()=>{
            console.log('Welome!!!!');
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
        console.log('Hiiii');
        });

    //fs.writeFileSync('Message.txt','Siddhu');
    
}

res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>First Server</title></head>');
res.write('<body><h1>Hello Node.JS</h1></body>');
res.write('</html>');
res.end();
};

/*module.exports={
    handler: requestHandler,
    someText:'Hello to Node JS'
};*/
//module.exports.hadler = requestHandler;
//module.exports.someText = 'Hello to Node JS';

exports.handler = requestHandler;
exports.someText = 'Hello Siddhu Subramaniyan';