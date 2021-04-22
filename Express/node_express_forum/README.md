# Express 論壇系統

### 主要功能：註冊、登錄、發佈主題、回復主題   

### 1 安裝 express 、創建論壇框架
1. npm install -g express-generator
 - 執行 express --version 若有版本號，則安裝成功

2. express node_express_forum  (express 論壇名稱)
   
3. cd node_express_forum  (進入該目錄)  

4. 該框架結構圖如下：  

├── app.js  
├── package.json  // 依賴的模塊 
├── bin  
│   └── www  
├── public  // 靜態文件目錄
│   ├── images  
│   ├── javascripts  
│   └── stylesheets  
│       └── style.css  
├── routes  // 路由，相當於控制器
│   ├── index.js  
│   └── users.js  
└── views  // 視圖 
├── error.jade  
├── index.jade  
└── layout.jade  

5. npm install --save-dev
6. npm start (執行測試 http://127.0.0.1:3000/  是否正常)
7. 基本框架已創建完畢

### 2 準備工作 (模板引擎、模型、數據庫、路由) 
### 2-1 模板引擎
1. express 預設模板引擎是jade , 先更換ejs，比較像html文件，較方便維護   
 - npm install ejs --save-dev
2. 在app.js中修改模板引擎：
 - app.set('view engine', 'ejs')  原為jade 改成 ejs
### 2-2 模型
1. 模型指得是MVC中的M ，主要是進行數據庫的連接與操作
 - 建立 models 目錄 ，用來存放文件用
### 2-3 數據庫
使用mysql存放數據，DB名稱可叫做 fourm , 裡面有3張表：user，list,reply  
 - user表（用戶）的字段有： id, username, password, regtime  
 - list表（主題）的字段有： id, uid(用戶id), title, content, createtime  
 - reply表（回復）的字段有： id, pid(主題id), uid(用戶id), content, createtime 
### 2-4 路由  

