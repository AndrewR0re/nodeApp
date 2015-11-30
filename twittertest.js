/**
 * Created by 1305997 on 30/11/2015.
 */

var twitter = require('twitter');

var client = new twitter({
    consumer_key: 'YWI08izs4KPKAcbhZPl94CjFL',
    consumer_secret: '58jzftT7UG3RgZFVJgw3XzXx5DRTP2gacgZDiHjhj1j8t9stA2',
    access_token_key: '2865779441-jzCOnSwJvSQyV8UUJYYaLszFh8MdPm6SVdGguh1',
    access_token_secret: 'kFN5UbhoAL8rAwdkqm9NifgUcsoCyffdfKs1WhcwkxoK5'
});

client.get('search/tweets',{q: 'lolcat'}, function(error, tweets){
    console.log(tweets);
});

var twitter = require('twitter')
var http = require('http')
var port = process.env.PORT || 1337;

var client = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/plain'});

    client.get('search/tweets',{q:'lolcats'}, function(error, tweets){
        console.log(tweets);
    });
}).listen(port);
