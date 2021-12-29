let myList =[]
let input = document.getElementById("input");
let list = document.getElementById("list");
let open = document.getElementById("open");
let dark= document.getElementById("dark");
let container = document.getElementById("container");
let body= document.getElementById("body")
let light = document.getElementById("light")
let clear = document.getElementById("clear")
let count = document.getElementById("count")
let section= document.getElementById("section")
let completed = document.getElementById("completed")
let radio = document.querySelectorAll(".radio")
let section1 = document.getElementById('section1')
let section3 = document.getElementById("section3")
let count1 = document.getElementById("count1")
let clear1 = document.getElementById("clear1")
let all = document.getElementById('all')


dark.addEventListener("click", function(){
    container.style.backgroundImage="url('image/bg-desktop-dark.jpg')"
    list.style.cssText =`
    background:hsl(235, 21%, 11%);
    color: white;
    box-shadow:none;
    `
    input.style.cssText =`
    background: hsl(235, 21%, 11%);
    color: white;`
    body.style.backgroundColor ="black"
    section.style.cssText =`
    background:  hsl(235, 21%, 11%);
    color:white;
    box-shadow: none;`
    section1.style.cssText = `
    background: hsl(235, 21%, 11%);
    color: white;
     box-shadow: none;
    `
    section3.style.cssText=`
    background: hsl(235, 21%, 11%);
    color: white;
    box-shadow: none`
  
    // dark.style.display="none"
  let  html=  dark.innerHTML 
    .replace(`<i class="fas fa-moon"></i>`)
   .replace( `<i class="fas fa-sun"></i>`)
 dark.innerHTML = html   
    
})
function render(){
  listItem =""
  for (i=0; i<myList.length; i++){
  listItem += `
    <li><input type="radio" class="radio" >&nbsp&nbsp${myList[i]}</li> 
    <hr>`   
  
  }
  list.innerHTML = listItem
 
}



input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
      myList.push(input.value)
    render(myList)
    input.value=""
    
    
   if (event.keyCode === 13){
    count.innerHTML++ 
    count1.innerHTML++
   }
 
//  localStorage.setItem("mylist", JSON.springify(myList))
 localStorage.setItem("myList",JSON.stringify(myList))
 
 }
 
 
})

// console.log( JSON.parse (localStorage.getItem("mylist")))
 let listFromLocalStorage = JSON.parse (localStorage.getItem("myList"))
 if (listFromLocalStorage){
   myList= listFromLocalStorage
   render()
 }

all.addEventListener("click", function(){
 render(myList)
 all.style.color="blue"
})
clear1.addEventListener("click", function(){
  
  count1.innerHTML="0"
  localStorage.clear()
  myList=[]
  render(myList)
})


clear.addEventListener("click", function(){
    
    localStorage.clear()
    myList=[]
    render(myList)
    count.innerHTML="0"
  
})

completed.addEventListener("click", function(){

  
  a = list.addEventListener("click", function(){
    let listItem = document.getElementById("input").value
    list.innerHTML += `
    <li><input type="radio" class="radio" >&nbsp&nbsp${listItem}</li> 
    <hr>`
})
if (list.innerHTML === a){
 console.log(myList)
  
 
}



})
