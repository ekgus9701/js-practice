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

          for(let i=1;i<=Number(line.trim());i++){
            if(i%3==0&&i%5==0) console.log("3과 5의 공배수")
            else if(i%3==0) console.log("3의 배수")
            else if(i%5==0) console.log("5의 배수")
            else console.log("그냥 숫자")
          }
        
          rl. close();
          
     }
 });