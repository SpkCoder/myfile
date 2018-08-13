
//做饭
function cook(data){
    console.log('开始做饭。');
    return new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve('鸡蛋炒饭');
        }, 1000);
    });
    
}
 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    return new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            //resolve('一块碗和一双筷子');
            reject('没吃饱');
        }, 2000);
    });
    
}

//洗碗
function wash(data){
    console.log('开始洗碗：' + data);
    return new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('洗碗完毕!');
            resolve('干净的碗筷');
        }, 2000);
    });
    
}


cook()
.then(eat)
.then(wash)
.catch(function(data){
    console.log(data);
})


Promise
.all([eat('一块碗和一双筷子'), wash('干净的碗筷')])
.then(function(result){
    console.log("完毕：");
    console.log(result);
}).catch(function(data){
    console.log(data);
})