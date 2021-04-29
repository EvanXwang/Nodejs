# Express web 框架

## 1 應用程序生成器

### 1-1 說明
可快速創建應用程序框架

### 1-2 安裝 
 - npm install express-generator -g
 
### 1-3 使用方法
目前支援 ejs、pug、hbs 

查詢語法
 - express-h 
 
生成語法
 - express --view=[engine名稱] [預設資料夾名稱]
 
舉例
 - express --view=ejs myapp

生成後，依照下面動作執行

change directory:
     $ cd myapp

install dependencies:
     $ npm install

run the app:
     $ DEBUG=myapp:* npm start


