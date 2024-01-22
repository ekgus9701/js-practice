let x=[3,6,9,20,-7,5];

x.map(item=>{
    return item*10;

})

for(let i=0;i<x.length;i++){
    x[i]*=10;
    console.log(x[i]);
}
console.log("-".repeat(10));

let y={"math": 70, "science":80,"english":20}

for(let i in y){
    y[i]+=10;
    console.log(y[i]);
}



