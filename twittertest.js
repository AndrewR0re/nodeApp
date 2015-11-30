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
