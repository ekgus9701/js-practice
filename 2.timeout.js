function run(){
    console.log("3초 후 실행");
}

console.log("실행");
setTimeout(run,3000);
console.log("종료");

// 실행 -> 종료-> (3초 후에) 3초 후 실행 이 뜬다