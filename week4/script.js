let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function showTasks(){
let list=document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((t,i)=>{
let li=document.createElement("li")
li.innerHTML=t+" <button onclick='deleteTask("+i+")'>X</button>"
list.appendChild(li)
})
}

function addTask(){
let input=document.getElementById("taskInput")
tasks.push(input.value)
localStorage.setItem("tasks",JSON.stringify(tasks))
input.value=""
showTasks()
}

function deleteTask(i){
tasks.splice(i,1)
localStorage.setItem("tasks",JSON.stringify(tasks))
showTasks()
}

showTasks()

let products=[
{name:"Laptop",price:800,cat:"tech"},
{name:"Phone",price:500,cat:"tech"},
{name:"Book A",price:20,cat:"books"},
{name:"Book B",price:15,cat:"books"}
]

function displayProducts(list){
let box=document.getElementById("productList")
box.innerHTML=""

list.forEach(p=>{
let div=document.createElement("div")
div.className="product"
div.innerHTML=p.name+"<br>$"+p.price
box.appendChild(div)
})
}

displayProducts(products)

function filterProducts(){
let f=document.getElementById("filter").value
if(f=="all") displayProducts(products)
else displayProducts(products.filter(p=>p.cat==f))
}

function sortProducts(){
let s=document.getElementById("sort").value
let sorted=[...products]

if(s=="low") sorted.sort((a,b)=>a.price-b.price)
if(s=="high") sorted.sort((a,b)=>b.price-a.price)

displayProducts(sorted)
}