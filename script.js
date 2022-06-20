const scale=document.querySelector(".scale");
for(let i=1;i<=500;i++){
let span=document.createElement("div");
span.classList.add("div-markup")
scale.append(span);
}

document.addEventListener("click",function(e){
  console.log(e.pageX);
  console.log(e.pageY);
})