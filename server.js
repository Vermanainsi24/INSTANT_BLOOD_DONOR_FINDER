const http=require('http');
const fs=require('fs');

const registration=fs.readFileSync('registration form.html');
const blooddonorguidelines=fs.readFileSync('blooddonorguidelines.html');
const about=fs.readFileSync('about.html');
const donorfinder=fs.readFileSync('donorfinder.html');
const home=fs.readFileSync('intro.html');
const contact=fs.readFileSync('contact.html');


const Server=http.createServer((req,res)=>
{ 
     comsole.log(req.url);
     url=req.url;
     res.writeHead(200,{'content-type':'text/html'});
     if(url=='/')
     {
     res.end(home);
     }
     else if(url=='/about')
     {
        res.end(about);
     }
     else if(url=='/blooddonor')
     {
        res.end(blooddonorguidelines);
     }
     else if(url=='/donorfinder')
     {
        res.end(donorfinder);
     }
     else if(url=='/contact'){
         res.end(contact);
     }
     else{
        res.statusCode=404;
        res.end('<h1>page not found</h1>');
     }
})

Server.listen(80, '127.0.0.1' ,()=>
{
    console.log("listening on port 80")
})
    