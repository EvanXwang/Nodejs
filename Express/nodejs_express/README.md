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




