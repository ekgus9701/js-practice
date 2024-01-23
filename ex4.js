function ask(trigFn, resolveFn,rejectFn){
    trigFn()?resolveFn():rejectFn()
}

const ask=(trigFn, resolveFn,rejectFn)=>{
    trigFn()?resolveFn():rejectFn()
}

ask(
    ()=>confirm("동의하십니까?"),
    ()=> alert("동의 완료"),
    ()=> alert("동의하지않음")
)

