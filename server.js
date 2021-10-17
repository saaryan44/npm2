const x=require("express");

const y=x();

y.get("/",(a,b)=>b.send(`<html><body><h1>hello index</h1></body></html>`));

y.get("*",(a,b)=>b.send(`<html><body><h1>hello any other page</h1></body></html>`));

y.listen((process.env.PORT || 3000),()=>console.log("hi"));