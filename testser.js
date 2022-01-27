const http = require("http");
const port = 2050;

const myserver = (req, res) =>{
    res.end("wlecome")
};

const app = http.createServer(myserver);
app.listen(port, () => {
    console.log("listening on port" + port);
});