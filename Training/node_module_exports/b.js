var myName = 'Ray'

//模組化 myName此變數
module.exports = myName



//若有多個變數或函數想傳入可這樣寫：

var myName1 = 'Evan'
var myName2 = 'Jojo'

function sayHi(){
    return 'Hello'+myName
}

function num(n){
    return n * 2
}

module.exports = {
    myName1,
    myName2,
    sayHi,
    num
}