// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: 'Ua1e07eb6b400a0b415ddcf4b60e8d8c1',
  channelSecret: '218a172d91801695545e1ccdfd430d3e',
  channelAccessToken: 'V2qKwTbl0odDBS6l8QqpnvXg1G9xq+DSB/W2nogMjEnJBTiBksFdjngPNVFTE7gBWEZt/u142uVoOpPKuZsuF7rrNgis5mr56qH+lQ37CFh7bUH0bRcw65WUk/7cDYoQMsB86A2kRDaOdbpcbzqR7wdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});