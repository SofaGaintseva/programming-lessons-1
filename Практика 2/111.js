const http = require("http");
const fs = require("fs");
let name='Sofia'
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url === "/order" + name+'=lasagna' ) {
        response.write("<h2>Заказ принят!</h2>");
    } else if (request.url == "/orders") {
        response.write("<h2>Список принятых заказов:</h2>");
    } else if (request.url == "/serve"+name+'=lasagna') {
        response.write("<h2>Обслуживание клиента</h2>");
    } 
    
    else {
        response.write("<h2>Not found</h2>");
    }
    response.end();

};
http.createServer(requestHandler).listen(4000);