//callback함수를 이용한 동기 구현 -> 콜백지옥(콜백 함수의 깊이가 너무 깊어지면 가독성이 떨어짐)
function fastFunction(err,data,done){
    setTimeout(function(){
        done(undefined,data*2); //1초후에 data*2됨
    },1000)
}

function slowFunction(err,data,done){
    setTimeout(function(){
        done(undefined,data+10);
    },3000)
}

function runTasks(callback){
    //fastfunction 실행 -> slowfunction 실행
    fastFunction(undefined,10,function(err,data){
        if(err) return callback(err);
        console.log("fastFunction",data);

        slowFunction(undefined, data,function(err,data){
            if(err) return callback(err);
            console.log("slowFunction",data);
        
        })
    })
}

runTasks(err=>{
    console.error(err);
})