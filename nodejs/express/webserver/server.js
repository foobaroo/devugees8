var http=require('http'); //1. Import node.js core module

var server=http.createServer(function(req,res){  // 2. Create web server

    ///handle incomming requests here..

    //check the URL of the current request
    if(req.url=='/')
    {
        //set response header
        res.writeHead(200,{'Content-Type': 'text/html'});

        //set response content
        res.write('<html><body><p>This is home page.</p></body></html>');

        res.end();
    }
    else if (req.url== '/student')
    {
        //set response header
        res.writeHead(200,{'Content-Type': 'text/html'});

        res.write('<html><body><p>This is student page.</p></body></html>');
        res.end();
    }
    else if (req.url== '/admin')
    {
        //set response header
        res.writeHead(200,{'Content-Type': 'text/html'});

        res.write('<html><body><p>This is admin page.</p></body></html>');
        res.end();
    }
    else if (req.url== '/data')
    {
        //set response header
        res.writeHead(200,{'Content-Type': 'application/json'});

        res.write(JSON.stringify({message:"Hello World"}));
        res.end();
    }
    else
        res.end('Invalid Request!');


});

server.listen(5000);
console.log('Node.js web server at port 5000 is running...');

