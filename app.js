const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');


app.get('/', (req,res) => { res.send('Hello World!') });

app.get('/test/:myvar', (req,res) => {
  //console.log( req.params.myvar * 10 );
  //console.log( `Greetings, ${req.params.myvar}` );
  fs.writeFile('./data.txt', `Random variable: ${req.params.myvar}. This file was created in node via an ExpressJS route`, err=>{
    if( err ){
      return console.log( err );
    }
    console.log( 'data file written!' );
  });
});

app.listen(port, ()=>{ console.log(`Example app listening on port ${port}`); });

