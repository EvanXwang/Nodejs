# Express - Pug 模版引擊
### 說明
1. web server 拆成app.js(控制網路跳轉) 、server.js (監聽網路端口) 
2. 網頁存於routes 


### 建立專案、並初始化
1. mkdir web  
2. cd web
3. npm init -y

### 安裝express 和 nodemon 測試工具  
1. npm install express --save 
2. npm install body-parser --save
3. npm install nodemon --save-dev
4. 修改package.json 程式 加入 >  
   "scripts": {   
   "dev": "nodemon app.js"
   },
 - 開發測試
1. npm run dev   

### 安裝Pug 模版引擎 (view engine)
 - 網址：https://pugjs.org/api/getting-started.html
1. npm install pug --save
2. 在web底下，新增views 資料夾

