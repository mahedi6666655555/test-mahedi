// this is sincronas 
fetch(``)
.then((res)=>res.json())
.then((data)=>console.log(data))


// this is a scencronas

let mahedi 

let mahedi1= async ()=>{


    let res=await fetch(``)
    let data=await data.json()

    showdata(data.data)


}

