let api_key=`b8081cd14c7b9c8481efccdf61af3252`

let showdata=city=>{

 let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric `
 fetch(url)
 .then((res)=>res.json())
 .then((data)=>mahedi(data))

}


let mahedi=data=>{
    console.log(data);

    let get=document.getElementById("temp")
    console.log(data.main.temp);
    get.innerText=data.main.temp


}


document.getElementById("btn").addEventListener("click",function(){

    let get66=document.getElementById("input")
    let final=get66.value
    showdata(final)

    let get33=document.getElementById("city").innerText=final


})


showdata("dhaka")
