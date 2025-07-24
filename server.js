const { log } = require('console');
const http=require('http');
const PORT=3000;

const app=http.createServer((req,res)=>{
    const {method,url}=req;

    if(url.toLowerCase()==='/home'){
        if(method=='GET'){
            res.writeHead(200,{'Content-Type':'text/html'});

            res.write(`<h1>HOME</h1>`);
            res.end();
        }
    }
    else if(url.toLowerCase()==='/about'){
        if(method=='GET'){
            res.writeHead(200,{'Content-Type':'text/html'});

            res.write(`<h1>ABOUT</h1>`);
            res.end();
        }
    }
    else if(url.toLowerCase()==='/contact'){
        if(method=='GET'){
            res.writeHead(200,{'Content-Type':'text/html'});

            res.write(`<h1>CONTACT</h1>`);
            res.end();
        }
    }
})

app.listen(PORT,()=>{
    console.log(`Server is live on http://localhost:${PORT}`);
})
