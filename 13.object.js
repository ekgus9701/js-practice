const KEY="SAMPLE";
const obj1={
    name:'John',
    sayHi:function(){
        console.log(`${this.name} 친구야 반갑다.`);
    },
    [KEY]: "sampleValue",
}


console.log(obj1);
console.log(obj1.name);
console.log(obj1['name']);
obj1.sayHi();

console.log(obj1.sampleKEY); //undefined
console.log(obj1.SAMPLE);
console.log(obj1[KEY]);
