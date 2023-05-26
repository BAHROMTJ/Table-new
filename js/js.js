let arr=[]
let cnt=1
let form=document.querySelector(".form")

form.onsubmit=(Event)=>
{
  
    Event.preventDefault()
const target=Event.target

let formobj={
id:Math.floor(Math.random()*100),
 avatar:target["avatar"].value,
 email:target["email"].value,
 name:target["name"].value.split(" ")[0],
 surname:target["name"].value.split(" ")[1],
 age:target["age"].value,
 tel:target["tel"].value,
}
arr.push(formobj)
render()
}


let render=()=>{
let view=document.querySelector(".view")
view.innerHTML=''
arr.forEach((elem) => {
    let tr=document.createElement("tr")
    tr.classList.add("tr")
let id1=document.createElement("td")
    let td0=document.createElement("td")
    let img=document.createElement("img")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td") 
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    let td6=document.createElement("td")
    let button=document.createElement("button")
     
     
     
     

if(elem.avatar==""){img.src="https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg"}
else { img.src=elem.avatar}
   img.style.width='100px'
  img.classList="img"
     td1.innerHTML=elem.email
td2.innerHTML=elem.name
td3.innerHTML=elem.surname
td4.innerHTML=elem.age+' Age'
td5.innerHTML=elem.tel
 td1.innerHTML=elem.email
 button.classList="delete"
 button.innerHTML='Dalete'

 id1.innerHTML=elem.id


 tr.appendChild(id1)
 view.appendChild(tr)
   tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2) 
    tr.appendChild(td3) 
     tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    td6.appendChild(button)
  
   


td0.appendChild(img)


   button.onclick=()=>dalete(elem.id)
   
}
)
}



function dalete(id){
   arr= arr.filter(a=>a.id!=id)
   render()
}
