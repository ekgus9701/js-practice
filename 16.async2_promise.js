function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result=data*2;
            console.log('Fast function done', result)

            //reject(new Error("임시에러")); //catch로 잡음

            //reslove는 runTasks()에서 then 뒤에 오는 function
            //(data)=>{
                //return slowFunction(data);
            
            resolve(result);
        },1000)
    })
}

function slowFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result=data+10;
            console.log('Slow function done', result)

            resolve(result);
        },3000)
    })
}

function runTasks(){
    return fastFunction(10)
    .then((data)=>{
        return slowFunction(data);
    }).then(data=>{
        console.log("작업완료",data);
    }).catch(err=>{
        console.error(err);
    })
}

runTasks();


