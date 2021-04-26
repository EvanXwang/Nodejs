# NPM (Node Package Manager)

### 1 指令說明

1. npm init  
   初始化，會產生 package.json
   
2. npm install  
   安裝 package.json 設定的 packages
   
3. npm install [package]  
   - 安裝 [package] ； NPM 後面加 --save   
   - --save-dev  會存入 package.json 裡  
   - -g 則安裝到全域 
    
4. npm uninstall   
   移除 [package] 
   - 後面一樣可以加 --save 、 --save-dev 、 -g
    
5. npm update  
   更新 Local 的所有 Packages
   
   
   
### 2 版本號辨別

### 2-1
舉例：package.json
"hexo": "^3.8.0",

通常第一個數字是重大的改版 3，一般來講 hexo 2.x.x 與 3.x.x 就會有可能是什麼重大的改版  

第一個數字是主要的版本號 → 3  
第二個數字是次要版本號 → 8  
第三個數字是 Bug 的修正號 → 0  


### 2-2 
"hexo": "^3.8.0",  
箭頭 (^) 

這代表的意思是它會自動更新第二及第三數字的版本更新   
例如 3.7.2 更新至 3.8.0，但是它並不會更新第一個主要版本號碼  
因為通常第一個數字的更新都是屬於重大改版，隨意更新可能會導致 出問題


### 2-3  
"hexo": "~3.8.0",   
蚯蚓符號(~)  
這個符號的意思代表著，我只更新 bug 的修正，也就是第三個數字。

如果沒有箭頭 or 蚯蚓，就代表你只安裝這個版本。  

### 2-4  
"hexo": "latest",  
意旨永遠都更新到最新，但是一般來講很少有開發者使用，因為這樣子會導致出現一些奇怪的問題。 
