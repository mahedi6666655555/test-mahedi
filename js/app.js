let Api_Key = `b8081cd14c7b9c8481efccdf61af3252`;

let show = city => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showdata(data));
};


let showdata=data=>{

    let doc=document.getElementById("temp")

doc.innerText=data.main.temp

}


document.getElementById("btn").addEventListener("click",function(){

    let get2=document.getElementById("input").value
    show(get2)

    let get3=document.getElementById("city").innerText=get2

})

show("dhaka")