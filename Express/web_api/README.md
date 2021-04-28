# 使用Express.js 快速開發網站 api

##express.js 安裝相關項目
### 指令
 - 建立專案、並初始化
1. mkdir web_api  
2. cd web_api
3. npm init -y

 - 安裝express 和 nodemon 測試工具  
1. npm install express --save 
2. npm install body-parser --save
3. npm install nodemon --save-dev
4. 修改package.json 程式 加入 >  
   "scripts": {   
   "dev": "nodemon app.js"
   },
 - 開發測試
1. npm run dev   

