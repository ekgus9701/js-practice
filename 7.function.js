const max1=function(a,b){
    return a>b?a:b;
}

/*const 함수이름 =(인자)=>{
    ..코드
}*/

const max2=(a,b)=>{
    return a>b?a:b;
}

//return 값만 있을 땐 다음과 같이 작성 가능
const max3=(a,b)=>(a>b?a:b);

console.log(max1(5,7));
console.log(max2(5,7));
console.log(max3(5,7));