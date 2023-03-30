const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

//static files
app.use(express.static(path.join(__dirname,'public')));
//call the port
app.listen(port, ()=>{
    console.log(`Server Ready on ${port}`);
});
