// node.js 환경에서 진행할 경우. 
const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let count=0;
let arr=[];
let flag=true;
rl.on('line', function(line) { // 코드 작성 
    count++;
    
    if(Number(line.trim())<=65 ) {
        
        flag=false;
       
    }
    if(count>=3){
         // 코드 종료
         rl. close();
         console.log(flag);
    }
});

