const readline = require('readline') 
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout 
 });
 
 let count=0;

 console.log("정수를 입력해주세요:");
 rl.on('line', function(line) { // 코드 작성 

    
    count++;

     if(count>=1){
          // 코드 종료

          for(let i=1;i<=10;i++){
            console.log(Number(line.trim())+"*"+i+"="+Number(line.trim())*i);
          }
        
          rl. close();
          
     }
 });