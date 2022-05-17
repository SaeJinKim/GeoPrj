//var express = require('express'); // 웹 서버 사용
var fs = require('fs'); // 파일 로드 사용
const cors = require('cors');
const express = require('express');
const router = express.Router();
var app = express();
var port = 3000;



router.get('/', cors(), (req, res) => { res.send('cors!') });

app.use(cors())

app.listen(port, function(){
	console.log('Server Start, Port : ' + port);
});

app.get('/', function(req, res){
	
	fs.readFile(__dirname + '/src/main/resources/static/hello.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.setHeader('Access-Control-Allow-origin', '*');
			res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용

			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(data);
		}
	});
}); 

app.use('/static', express.static(__dirname + '/src/main/resources/static'));
