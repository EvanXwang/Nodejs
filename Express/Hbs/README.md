# Hbs 練習

## 說明  
使用Express handlebars template engine   
創建表單並讀取表單，處理用戶提交的內容與用戶交互

## 安裝Hbs 

 - express --view=hbs Hbs
 - cd Hbs
 - npm install 
 
## nodemon 
(自動運行程式)
 - npm install nodemon --save-dev
 - 修改package.json 程式 加入 >  
   "scripts": {   
   "dev": "nodemon ./bin/www"
   },
 - npm run dev  ()
 
## 安裝body-parser
(處理表單資料)
 - npm install body-parser --save
 - 在app.js 新增 =>  
 var bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({extended: true}));
 
 - 在index.js 新增 =>  
 res.render('index', { title: 'Express',userInput:req.body });
 
 - index.hbs 新增 =>   
 編寫程式邏輯
 
## 安裝express-validator
(驗證表單內容)
 - npm install express-validator --save
 - 在index.js 新增 =>  
 const {check, validationResult } = require ('express-validator');