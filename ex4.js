function ask(trigFn, resolveFn,rejectFn){
    trigFn()?resolveFn():rejectFn()
}

const ask=(trigFn, resolveFn,rejectFn)=>{
    trigFn()?resolveFn():rejectFn()
}