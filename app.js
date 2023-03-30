const server = require('./src/services/server');
const port = process.env.PORT || 8080;


server.listen(port, ()=>{
    console.log('escuchando en el servidor ' + port);
});
