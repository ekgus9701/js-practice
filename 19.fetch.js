//get
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))

//post
fetch('https://api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({key:'value'})
})
.then(response=>response.json())
.then(data=>console.log('Success:',data))
.catch(error=>console.error('Error:',error));

//put
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:1,
        title:'새로운 제목',
        body:'새로운 내용',
        userId:1
    })
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error:',error));

//delete
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',
})
.then(response=>response.json())
.then(data=>console.log('Deleted:',data))
.catch(error=>console.error('Error:',error));