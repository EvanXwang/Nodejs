# Node.js + Express + EJS 網站建置

Express 是一個最小且靈活的 Web 應用程式框架，   
為 Web 和移動應用程式提供了一組強大的功能，  
它的行為就像一個中間件，可以幫助管理伺服器和路由。

EJS 是 Express 的模板，用來渲染html頁面(xxx.ejs > EJS > html > 瀏覽器)。   

### 創建Express + EJS網站
1.安裝express-generator 
 -  npm install -g express-generator   
(mac 需進入最高權限 sudo -s)

2.檢查安裝express版本
 - express --version

3.移到自己的專案名稱 (取名為 nodejs_express)
 - express -e myExpressWeb(自己命名的專案名稱)  
可以看到一個基礎的 express web 專案包已經建立完成

4.進入myExpressWeb ,下載 package.json 設定相依項目  
 - npm install 

5.啟動網頁
(啟動方式可以直接執行 npm start 自動去帶  
 package.json 裡 scripts 下的 start 指令)
 - npm start
 
6.啟動後輸入網址 http://localhost:3000/ ，就可以看到 Welcome 初始畫面了




ps：除錯 若出現Port 3000 is already in use
 - $ lsof -i tcp:3000  
 - $ kill -9 PID

 
### 文件結構說明

┌── app.js  
├── bin  
│   └── www  // 程式進入點  
├── package-lock.json  
├── package.json  
├── public  
│   ├── images  
│   ├── javascripts  
│   └── stylesheets  
│       └── style.css  
├── routes  // 路由  
│   ├── index.js  
│   └── users.js  
└── views  
    ├── error.jade  
    ├── index.jade  
    └── layout.jade  
    
1. bin/www 是整個程式的進入點，port 預設為3000  
   代表web server監聽埠號 3000 port
   
2. 前端畫面則是public 與 views 這二個資料夾管理  

3. 在routes/index.js 加入 /test 路徑 並傳送文字  
   router.get代表建立一個路由並使用HTTP request methods中的get形式   
   router.get中有兩個參數，第一個是子路徑名稱用單引號字串包起來，  
   第二個是一個方法裡面面有三個參數分別為 req(request)接收資料、res(respond)回傳資料以及next。

4. 修改檔案後，使用node ./bin/www 或 npm start 來啟動專案  
   後者指令為何可以啟動，可以查看package.json檔案裡的scripts，  
   有設定好指令相對路徑。
   所以在package.json中可以依據習慣設定自己的專屬快捷鍵
